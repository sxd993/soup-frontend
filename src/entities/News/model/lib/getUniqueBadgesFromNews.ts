import type { NewsItem } from "../types/news.types";

export function getUniqueBadgesFromNews(news: NewsItem[]): string[] {
    const badges = news
        .filter((item) => !item.isAds)
        .map((item) => item.category);
    return [...new Set(badges)];
}
