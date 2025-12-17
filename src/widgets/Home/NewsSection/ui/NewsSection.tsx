'use client'

import { NEWS, NewsCardSmall } from "@/entities"
import { IMAGES } from "@/shared/config"
import { useCurrentPath } from "@/shared/hooks/useCurrentPath"
import { Badge } from "@/shared/ui/Badge"
import { SectionTitle, ViewAllButton } from "@/shared/ui/icons"
import Image from "next/image"
import Link from "next/link"

export const NewsSection = () => {
    const fallbackImage = IMAGES.hero.background
    const [first, ...rest] = NEWS
    const mobileRest = rest.slice(0, 2)

    // Текущий путь
    const currentPath = useCurrentPath()
    const isNewsPage = currentPath === '/news'

    return (
        <section className="flex flex-col">
            {/* Шапка секции */}
            <div className={`flex justify-between w-full ${!isNewsPage ? 'mt-25 mb-10' : 'mb-5'}`}>
                {!isNewsPage && (
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full">
                        <SectionTitle title="Новости" />
                        <div className="hidden sm:block">
                            <ViewAllButton href="/news" text="Смотреть все" />
                        </div>
                    </div>
                )
                }
            </div>
            {/* Контент */}
            <div className="flex flex-col md:flex-row gap-4.5 items-stretch">

                {/* Левая колонка */}
                <Link
                    href={`/news/${first.id}`}
                    className="relative w-full min-h-[780px] overflow-hidden rounded-[40px] group block cursor-pointer"
                >
                    <Image
                        src={first.image}
                        alt="News"
                        fill
                        className="object-cover hover:scale-107 transition-all duration-300 ease-in-out"
                        placeholder="blur"
                        blurDataURL={fallbackImage}
                    />

                    {/* Оверлей */}
                    <div className="absolute bottom-5 left-5 right-5 max-w-[367px]">
                        <div className="flex flex-col gap-5">
                            <Badge badge={first.badge} />
                            <div className="rounded-[20px] bg-white p-5 pb-15 shadow-sm fade-out-in">
                                <h3 className="lg:text-[22px] text-xl font-bold leading-snug text-accent-secondary">
                                    {first.title}
                                </h3>
                                <p className="mt-2 text-[16px] font-medium text-secondary">
                                    {first.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
                {/* Правая колонка */}
                <div className="grid w-full">
                    <div className="grid grid-cols-1 gap-5 sm:hidden justify-items-center">
                        {mobileRest.map((item, index) => (
                            <NewsCardSmall
                                key={item.id}
                                item={item}
                                fallbackImage={fallbackImage}
                                withZoom={index === 0}
                                href={`/news/${item.id}`}
                            />
                        ))}
                    </div>

                    <div className="hidden sm:grid grid-cols-2 gap-5 content-between justify-items-center">
                        {rest.map((item, index) => (
                            <NewsCardSmall
                                key={item.id}
                                item={item}
                                fallbackImage={fallbackImage}
                                withZoom={index === 0}
                                href={`/news/${item.id}`}
                            />
                        ))}
                    </div>
                </div>

            </div>

            {!isNewsPage && (
                <div className="mt-6 sm:hidden">
                    <ViewAllButton href="/news" text="Смотреть все" />
                </div>
            )}
        </section >
    )
}
