import type { QueryClient } from "@tanstack/react-query";
import type { AxiosInstance } from "axios";
import type { AuthSession } from "@/entities/Session/model/session.types";

export function attachAuthInterceptors(
  client: AxiosInstance,
  queryClient: QueryClient,
) {

  // Добавляем accessToken в каждый запрос, если сессия есть в react-query кеше
  client.interceptors.request.use((config) => {
    const session = queryClient.getQueryData<AuthSession>(["session"]);
    if (session?.accessToken) config.headers.Authorization = `Bearer ${session.accessToken}`;
    return config;
  });

  // Общий промис, чтобы при нескольких 401 одновременно refresh дернулся один раз
  let refreshPromise: Promise<AuthSession> | null = null;

  client.interceptors.response.use(
    (r) => r,
    async (error) => {
      const original = error?.config as { _retry?: boolean; url?: string; headers?: any } | undefined;
      if (!original) throw error;

      const is401 = error?.response?.status === 401;
      const isRefresh = (original.url ?? "").includes("/auth/refresh");

      // Не трогаем не-401, сам refresh-запрос, и уже повторённые запросы
      if (!is401 || isRefresh || original._retry) throw error;

      original._retry = true;

      // Стартуем refresh один раз, остальные ждут тот же refreshPromise
      if (!refreshPromise) {
        refreshPromise = client
          .post("/auth/refresh")
          .then((res) => {
            const newSession = res.data as Exclude<AuthSession, null>;
            queryClient.setQueryData(["session"], newSession);
            return newSession;
          })
          .catch(() => {
            // Если refresh упал — сбрасываем сессию
            queryClient.setQueryData(["session"], null);
            return null;
          })
          .finally(() => {
            refreshPromise = null;
          }) as any;
      }

      const newSession = await refreshPromise;
      if (!newSession?.accessToken) throw error;

      // Повторяем оригинальный запрос уже с новым токеном
      original.headers = original.headers ?? {};
      original.headers.Authorization = `Bearer ${newSession.accessToken}`;
      return client.request(original);
    }
  );

  return client;
}
