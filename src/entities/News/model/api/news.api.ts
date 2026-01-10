import { AxiosClient } from "@/shared/api/AxiosClient";
import type { NewsItem } from "../types/news.types";

// Получить список новостей
export const getNews = async (): Promise<NewsItem[]> => {
    const response = await AxiosClient.get<NewsItem[]>('/news');
    return response.data;
};

// Получить новость по id
export const getNewsById = async (id: string): Promise<NewsItem> => {
    const response = await AxiosClient.get<NewsItem>(`/news/${id}`);
    return response.data;
};