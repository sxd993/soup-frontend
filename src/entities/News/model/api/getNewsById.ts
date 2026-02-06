import { API_BASE_URL } from "@/shared/api"
import { ISR_REVALIDATE_SECONDS } from "@/shared/config/isr"
import type { NewsItem } from "../types/news.types"

export const getNewsById = async (id: string): Promise<NewsItem> => {
    const response = await fetch(`${API_BASE_URL}/news/${id}`, {
        next: { revalidate: ISR_REVALIDATE_SECONDS },
    })
    return response.json()
}