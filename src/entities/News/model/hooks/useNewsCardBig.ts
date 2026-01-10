import { useNews } from "./useNews";
import { NewsItem } from "../types/news.types"

// Хук для получения приоритетной новости {использует isImportantNew из API, исключает рекламу}
export const usePriorityNews = (): {
    item: NewsItem | undefined;
    href: string;
    isLoading: boolean;
} => {
    const { data: news = [], isLoading } = useNews();
    
    // Ищем новость с isImportantNew === true и не рекламу
    const item = news.find((newsItem) => newsItem.isImportantNew && !newsItem.isAds);
    const href = item ? `/news/${item.id}` : "";

    return { item, href, isLoading };
};