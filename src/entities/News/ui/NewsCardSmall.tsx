"use client"

import Link from "next/link"
import Image from "next/image"
import { NewsItem } from "../model/types"
import { useNewsCardImage } from "../model/useNewsCardImage"
import { Badge } from "@/shared/ui/Badge"

type NewsCardSmallProps = {
    item: NewsItem
    fallbackImage?: string
    featured?: boolean
    withZoom?: boolean
    href?: string
    className?: string
}

export const NewsCardSmall = ({
    item,
    withZoom = false,
    href,
    className,
}: NewsCardSmallProps) => {
    const { currentImage, handleMouseEnter, handleMouseLeave } = useNewsCardImage(item, withZoom)

    const articleClasses = ["flex flex-col", className].filter(Boolean).join(" ")

    const card = (
        <article className={articleClasses}>
            {/* Картинка */}
            <div
                className="relative w-full aspect-square rounded-2xl overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Image
                    src={currentImage}
                    alt={item.imageAlt}
                    fill
                    className={`object-cover transition-all duration-300 ease-in-out ${withZoom ? 'hover:scale-117' : ''}`}
                />

                <span className="absolute top-4 left-3">
                    <Badge badge={item.badge}/>
                </span>
            </div>

            {/* Текст */}
            <div className="mt-3">
                <h4
                    className="text-lg font-bold leading-[120%] text-secondary text-wrap"
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
            className="block h-full transition-transform duration-200 hover:-translate-y-1 cursor-pointer"
        >
            {card}
        </Link>
    )
}
