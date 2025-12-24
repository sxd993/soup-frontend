'use client'

import { NEWS, NewsCardBig } from "@/entities"
import { useCurrentPath } from "@/shared/hooks/useCurrentPath"
import { SectionTitle, ViewAllButton } from "@/shared/ui/icons"
import { BigNewCard } from "@/shared/ui/BigNewCard/ui/BigNewCard"

export const NewsSection = () => {
    const [, ...rest] = NEWS
    const fallbackImage = 'https://s3.twcstorage.ru/4b615622-soup/hero/background.png'
    const mobileRest = rest.slice(0, 2)

    // Текущий путь
    const currentPath = useCurrentPath()
    const isNewsPage = currentPath === '/news'

    return (
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

                {/*  большая карточка */}
                <BigNewCard
                />
                {/*  колонка */}
                <div className="grid w-full">
                    <div className="hidden md:grid grid-cols-1 gap-5  items-center">
                        {mobileRest.map((item, index) => (
                            <NewsCardBig
                                key={item.id}
                                item={item}
                                fallbackImage={fallbackImage}
                                withDescription={false}
                                withZoom={index === 0}
                                href={`/news/${item.id}`}
                                className="min-h-[320px]"
                            />
                        ))}
                    </div>

                    <div className="hidden md:grid grid-cols-2 gap-5 content-between justify-items-center">
                        {rest.map((item, index) => (
                            <NewsCardBig
                                key={item.id}
                                item={item}
                                fallbackImage={fallbackImage}
                                withDescription={false}
                                withZoom={index === 0}
                                href={`/news/${item.id}`}
                                className="min-h-[320px] lg:min-h-[360px]"
                            />
                        ))}
                    </div>
                </div>

            </div>

            {!isNewsPage && (
                <div className="mt-6 md:hidden">
                    <ViewAllButton href="/news" text="Смотреть все" />
                </div>
            )}
        </section >
    )
}
