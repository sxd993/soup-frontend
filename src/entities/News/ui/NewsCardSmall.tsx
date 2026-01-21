"use client"

import Link from "next/link"
import Image from "next/image"
import type { NewsItem } from ".."
import { Badge } from "@/shared/ui"

type NewsCardSmallProps = {
    item: NewsItem
    href?: string
    className?: string
}

// Компонент маленькой карточки новости {отображает изображение, категорию и заголовок}
export const NewsCardSmall = ({
    item,
    href,
    className,
}: NewsCardSmallProps) => {
    const articleClasses = ["flex flex-col relative", className].filter(Boolean).join(" ")
    const badgeHref = item.category ? `/news?badge=${encodeURIComponent(item.category)}` : undefined

    const card = (
        <article className={articleClasses}>
            {/* Картинка */}
            <div
                className="relative w-full aspect-square rounded-2xl overflow-hidden"
            >
                <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                />

                <span className="absolute top-4 left-3 z-20">
                    {badgeHref ? (
                        <Link href={badgeHref} className="relative z-20">
                            <Badge badge={item.category} />
                        </Link>
                    ) : (
                        <Badge badge={item.category} />
                    )}
                </span>
            </div>

            {/* Текст */}
            <div className="mt-3">
                <h4
                    className="text-lg font-bold leading-[105%] text-secondary text-wrap"
                    style={{ fontFamily: 'Manrope, var(--font-family-sans)' }}
                >
                    {item.title}
                </h4>
            </div>
        </article>
    )

    if (!href) {
        return card
    }

    return (
        <div className="relative h-full">
            {card}
            <Link
                href={href}
                aria-label={item.title}
                className="absolute inset-0 z-10"
            />
        </div>
    )
}