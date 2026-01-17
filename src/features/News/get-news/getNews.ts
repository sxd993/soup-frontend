import { API_BASE_URL } from "@/shared/api/config";
import type { NewsItem } from "@/entities/News";

// Получить список новостей
export const getNews = async (): Promise<NewsItem[]> => {
    const response = await fetch(`${API_BASE_URL}/news`, {
        next: { revalidate: 60 }
    });
    return response.json();
};