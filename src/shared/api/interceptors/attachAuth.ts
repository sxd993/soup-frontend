import type { QueryClient } from "@tanstack/react-query";
import type {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import type { AuthSession } from "@/entities/Session/model/session.types";

export function attachAuthInterceptors(
  client: AxiosInstance,
  queryClient: QueryClient,
) {
  type Session = Exclude<AuthSession, null>;
  type RetriableConfig = InternalAxiosRequestConfig & { _retry?: boolean };

  // Добавляем accessToken в каждый запрос, если сессия есть в react-query кеше
  client.interceptors.request.use((config) => {
    const session = queryClient.getQueryData<AuthSession>(["session"]);
    if (session?.accessToken) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${session.accessToken}`;
    }
    return config;
  });

  // Общий промис, чтобы при нескольких 401 одновременно refresh дернулся один раз
  let refreshPromise: Promise<Session | null> | null = null;

  client.interceptors.response.use(
    (r) => r,
    async (error) => {
      const axiosError = error as AxiosError;
      const original = axiosError.config as RetriableConfig | undefined;
      if (!original) throw error;

      const is401 = axiosError.response?.status === 401;
      const isRefresh = (original.url ?? "").includes("/auth/refresh");

      // Не трогаем не-401, сам refresh-запрос, и уже повторённые запросы
      if (!is401 || isRefresh || original._retry) throw error;

      original._retry = true;

      // Стартуем refresh один раз, остальные ждут тот же refreshPromise
      if (!refreshPromise) {
        refreshPromise = client
          .post<Session>("/auth/refresh")
          .then((res) => {
            const newSession = res.data;
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
          });
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
