'use client';

import type { NewsItem } from "@/entities/News";
import { NewsCardBig } from "@/entities/News";
import { useFilteredNewsList } from "../model/hooks/useFilteredNewsList";
import { getNewsListWithoutPriority, getPriorityNews } from "@/entities/News/model/lib/priorityNews";
import { ScrollNewsList } from "./ScrollNewsList";

type NewsFeedSectionProps = {
    news: NewsItem[];
};

export const NewsFeedSection = ({ news }: NewsFeedSectionProps) => {
    // Один источник фильтрации для bigcard и scrolllist.
    const { filteredNews } = useFilteredNewsList(news);
    const priorityNews = getPriorityNews(news);
    const listNews = getNewsListWithoutPriority(filteredNews, priorityNews);

    return (
        <div className="mt-6 flex flex-col gap-10">
            <div className="basis-1/2">
                <NewsCardBig item={priorityNews} />
            </div>
            <div className="basis-1/2">
                <ScrollNewsList news={listNews} />
            </div>
        </div>
    );
};