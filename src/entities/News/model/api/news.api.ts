import { API_BASE_URL } from "@/shared/api/config";
import type { NewsItem } from "../types/news.types";

// Получить список новостей
export const getNews = async (): Promise<NewsItem[]> => {
    const response = await fetch(`${API_BASE_URL}/news`);
    return response.json();
};

// Получить новость по id
export const getNewsById = async (id: string): Promise<NewsItem> => {
    const response = await fetch(`${API_BASE_URL}/news/${id}`);
    return response.json();
};