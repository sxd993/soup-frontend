"use client"

import Link from "next/link"
import Image from "next/image"
import { NewsItem } from "../model/types"
import { useNewsCardImage } from "../model/useNewsCardImage"
import { Badge } from "@/shared/ui/Badge"

type NewsCardSmallProps = {
    item: NewsItem
    fallbackImage: string
    featured?: boolean
    withZoom?: boolean
    href?: string
    className?: string
}

export const NewsCardSmall = ({
    item,
    fallbackImage,
    withZoom = false,
    href,
}: NewsCardSmallProps) => {
    const { currentImage, handleMouseEnter, handleMouseLeave } = useNewsCardImage(item, withZoom)

    const card = (
        <article className='flex flex-col'>
            {/* Картинка */}
            <div
                className="relative w-full aspect-square rounded-2xl overflow-hidden max-h-60"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Image
                    src={currentImage || fallbackImage}
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
                <h4 className="text-base font-bold leading-[120%] text-secondary text-wrap">
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
