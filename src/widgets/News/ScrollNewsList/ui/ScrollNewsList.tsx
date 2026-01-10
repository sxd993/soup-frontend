'use client';

import { NewsCardSmall, useNews, NEWS_MESSAGES } from "@/entities/News"
import { AdsBanner, QueryState } from "@/shared/ui"

export const ScrollNewsList = () => {
    const { data: news = [], isLoading, isError } = useNews()

    return (
        <QueryState
            isLoading={isLoading}
            isError={isError}
            isEmpty={news.length === 0}
            loadingMessage={NEWS_MESSAGES.loading}
            errorMessage={NEWS_MESSAGES.error}
            emptyMessage={NEWS_MESSAGES.empty}
        >
            <div className="w-full grid grid-cols-1 gap-6 items-stretch min-h-[350px]">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 content-between gap-5">
                    {news.map((n) => {
                        if (n.isAds) {
                            return (
                                <div key={n.id} className="w-full h-full max-w-none">
                                    <AdsBanner hasDescription={Boolean(n.description)} />
                                </div>
                            )
                        }
                        return (
                            <NewsCardSmall
                                key={n.id}
                                href={`/news/${n.id}`}
                                item={n}
                                className="w-full h-full max-w-none"
                            />
                        )
                    })}
                </div>
            </div>
        </QueryState>
    )
}