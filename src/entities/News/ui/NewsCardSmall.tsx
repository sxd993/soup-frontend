"use client"

import Link from "next/link"
import Image from "next/image"
import { NewsItem } from "../model/types"
import { Badge } from "@/shared/ui/Badge"

type NewsCardSmallProps = {
    item: NewsItem
    href?: string
    className?: string
}

export const NewsCardSmall = ({
    item,
    href,
    className,
}: NewsCardSmallProps) => {
    const articleClasses = ["flex flex-col", className].filter(Boolean).join(" ")

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

                <span className="absolute top-4 left-3">
                    <Badge badge={item.badge} />
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
        <Link
            href={href}
            className="block h-full cursor-pointer"
        >
            {card}
        </Link>
    )
}
