"use client";

import type { NewsItem } from "@/entities/News";
import { NewsCardBig } from "@/entities/News";
import { ScrollNewsList } from "./ScrollNewsList";

type NewsFeedSectionProps = {
    important: NewsItem | null;
    news: NewsItem[];
};

export const NewsFeedSection = ({ important, news }: NewsFeedSectionProps) => {
    return (
        <div className="mt-6 flex flex-col gap-10">
            <div className="basis-1/2">
                {important && <NewsCardBig item={important} />}
            </div>
            <div className="basis-1/2">
                <ScrollNewsList news={news} />
            </div>
        </div>
    );
};