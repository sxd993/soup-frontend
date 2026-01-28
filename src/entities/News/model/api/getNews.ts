import { API_BASE_URL } from "@/shared/api"
import type { NewsItem } from "@/entities/News"

export const getNews = async (): Promise<NewsItem[]> => {
    const response = await fetch(`${API_BASE_URL}/news`)
    return response.json()
}