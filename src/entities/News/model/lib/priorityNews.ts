import type { NewsItem } from "@/entities/News"

export const getPriorityNews = (news: NewsItem[]) => {
    return (
        news.find((item) => item.isImportantNew) ??
        news.find((item) => !item.isAds)
    )
}

export const getNewsListWithoutPriority = (
    news: NewsItem[],
    priorityNews?: NewsItem,
    limit?: number,
) => {
    const list = priorityNews ? news.filter((item) => item.id !== priorityNews.id) : news
    return typeof limit === "number" ? list.slice(0, limit) : list
}