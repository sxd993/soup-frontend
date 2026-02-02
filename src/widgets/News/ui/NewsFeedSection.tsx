'use client';

import type { NewsItem } from "@/entities/News";
import { NewsCardBig } from "@/entities/News";
import { useFilteredNewsList } from "../model/hooks/useFilteredNewsList";
import { ScrollNewsList } from "./ScrollNewsList";

type NewsFeedSectionProps = {
    news: NewsItem[];
};

export const NewsFeedSection = ({ news }: NewsFeedSectionProps) => {
    const { filteredNews } = useFilteredNewsList(news);
    const important = news[0];
    const listNews = filteredNews.filter((n) => n.id !== important?.id);

    return (
        <div className="mt-6 flex flex-col gap-10">
            <div className="basis-1/2">
                {important && <NewsCardBig item={important} />}
            </div>
            <div className="basis-1/2">
                <ScrollNewsList news={listNews} />
            </div>
        </div>
    );
};