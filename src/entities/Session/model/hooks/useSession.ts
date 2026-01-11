import type { AuthSession } from "../types/session.types";
import { AxiosClient } from "@/shared/api/AxiosClient";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchSessionFromToken } from "../lib/session.utils";

export function useSession() {
    const queryClient = useQueryClient()
    
    // Проверяем, есть ли данные в кеше
    const cachedSession = queryClient.getQueryData<AuthSession>(["session"])
    
    return useQuery<AuthSession>({
        queryKey: ["session"],
        queryFn: async () => {
            // Получаем accessToken через refresh
            const refreshResponse = await AxiosClient.post<{ accessToken: string }>("/auth/refresh");
            const { accessToken } = refreshResponse.data;

            // Получаем полную сессию (включая данные пользователя)
            return await fetchSessionFromToken(accessToken, AxiosClient);
        },
        retry: false,
        initialData: cachedSession ?? undefined,
        staleTime: Infinity,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        enabled: !cachedSession,
    });
}