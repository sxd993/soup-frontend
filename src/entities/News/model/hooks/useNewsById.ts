import { useQuery } from "@tanstack/react-query";
import { getNewsById } from "../api/news.api";
import type { NewsItem } from "../types/news.types";

// Хук для получения новости по id {кеширует данные, управляет состояниями загрузки/ошибок}
export const useNewsById = (id: string | undefined) => {
    return useQuery<NewsItem>({
        queryKey: ["news", id],
        queryFn: () => getNewsById(id!),
        enabled: !!id,
        staleTime: 5 * 60 * 1000, // Данные считаются свежими 5 минут
    });
};