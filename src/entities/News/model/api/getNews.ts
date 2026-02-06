import { API_BASE_URL } from "@/shared/api"
import type { NewsItem } from "@/entities/News"

type TimeParam = "week" | "month" | "all"

export const getNews = async (time?: TimeParam): Promise<NewsItem[]> => {
    const url = time && time !== "all" ? `${API_BASE_URL}/news?time=${time}` : `${API_BASE_URL}/news`
    const response = await fetch(url)
    return response.json()
}