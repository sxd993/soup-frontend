import { useQuery } from "@tanstack/react-query";
import { getNews } from "../api/news.api";
import type { NewsItem } from "../types/news.types";

// Хук для получения списка новостей {кеширует данные, управляет состояниями загрузки/ошибок}
export const useNews = () => {
    return useQuery<NewsItem[]>({
        queryKey: ["news"],
        queryFn: getNews,
        staleTime: 5 * 60 * 1000, // Данные считаются свежими 5 минут
    });
};