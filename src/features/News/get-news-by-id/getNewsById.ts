import { API_BASE_URL } from "@/shared/api/config";
import type { NewsItem } from "@/entities/News";

// Получить новость по id
export const getNewsById = async (id: string): Promise<NewsItem> => {
    const response = await fetch(`${API_BASE_URL}/news/${id}`, {
        next: { revalidate: 60 }
    });
    return response.json();
};