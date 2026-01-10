'use client'

import { NewsCardSmall, NewsCardBig, useNews, NEWS_MESSAGES } from "@/entities/News"
import { AdsBanner, SectionTitle, ViewAllButton, QueryState } from "@/shared/ui"
import { useCurrentPath } from "@/shared/hooks"

export const NewsSection = () => {
    const { data: news = [], isLoading, isError } = useNews()
    const lastThreeNews = news.slice(0, 4)
    const rest = lastThreeNews
    const mobileRest = rest.slice(0, 2)

    // Текущий путь
    const currentPath = useCurrentPath()
    const isNewsPage = currentPath === '/news'

    return (
        <QueryState
            isLoading={isLoading}
            isError={isError}
            isEmpty={!isLoading && lastThreeNews.length === 0}
            loadingMessage={NEWS_MESSAGES.loading}
            errorMessage={NEWS_MESSAGES.error}
            emptyMessage={NEWS_MESSAGES.empty}
        >
            <section className="flex flex-col">
                {/* Шапка секции */}
                <div className={`flex justify-between w-full ${!isNewsPage ? 'mt-25 mb-10' : 'mb-5'}`}>
                    {!isNewsPage && (
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full">
                            <SectionTitle title="Новости" />
                            <div className="hidden md:block">
                                <ViewAllButton href="/news" text="Смотреть все" />
                            </div>
                        </div>
                    )
                    }
                </div>
                {/* Контент */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-4.5 items-stretch">

                    {/* Левая колонка */}
                    <NewsCardBig />
                    {/* Правая колонка */}
                    <div className="grid w-full">
                        <div className="grid grid-cols-1 gap-5 md:hidden justify-items-center">
                            {mobileRest.map((item) => {
                                if (item.isAds) {
                                    return (
                                        <div key={item.id} className="w-full h-full max-w-none">
                                            <AdsBanner hasDescription={Boolean(item.description)} />
                                        </div>
                                    )
                                }
                                return (
                                    <NewsCardSmall
                                        key={item.id}
                                        item={item}
                                        href={`/news/${item.id}`}
                                    />
                                )
                            })}
                        </div>

                        <div className="hidden md:grid grid-cols-2 gap-5 content-between justify-items-center">
                            {rest.map((item) => {
                                if (item.isAds) {
                                    return (
                                        <div key={item.id} className="w-full h-full max-w-none">
                                            <AdsBanner hasDescription={Boolean(item.description)} />
                                        </div>
                                    )
                                }
                                return (
                                    <NewsCardSmall
                                        key={item.id}
                                        item={item}
                                        href={`/news/${item.id}`}
                                    />
                                )
                            })}
                        </div>
                    </div>

                </div>

                {!isNewsPage && (
                    <div className="mt-6 md:hidden">
                        <ViewAllButton href="/news" text="Смотреть все" />
                    </div>
                )}
            </section >
        </QueryState>
    )
}