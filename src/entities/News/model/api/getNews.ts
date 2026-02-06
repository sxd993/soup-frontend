import { ISR_REVALIDATE_SECONDS } from "@/shared/config/isr"
import { buildNewsListUrl, type NewsTimeParam } from "../lib/buildNewsListUrl"
import type { NewsItem } from "../types/news.types"

export const getNews = async (
    time?: NewsTimeParam,
    badge?: string,
): Promise<NewsItem[]> => {
    const response = await fetch(buildNewsListUrl(time, badge), {
        next: { revalidate: ISR_REVALIDATE_SECONDS },
    })
    return response.json()
}