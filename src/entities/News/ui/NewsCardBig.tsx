"use client"

import Link from "next/link"
import Image from "next/image"
import { NewsItem } from "../model/types"
import { useNewsCardImage } from "../model/useNewsCardImage"
import { Badge } from "@/shared/ui/Badge"

type NewsCardBigProps = {
    item: NewsItem
    fallbackImage: string
    withDescription?: boolean
    withZoom?: boolean
    href?: string
    className?: string
}

export const NewsCardBig = ({
    item,
    fallbackImage,
    withDescription = true,
    withZoom = true,
    href,
    className,
}: NewsCardBigProps) => {
    const { currentImage, handleMouseEnter, handleMouseLeave } = useNewsCardImage(item, withZoom)
    const containerClasses = `relative w-full overflow-hidden rounded-[40px] min-h-[520px] group ${className ?? ''}`

    const card = (
        <article
            className={containerClasses}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Image
                src={currentImage || fallbackImage}
                alt={item.imageAlt}
                fill
                className={`object-cover transition-all duration-300 ease-in-out ${withZoom ? 'group-hover:scale-107' : ''}`}
                placeholder="blur"
                blurDataURL={fallbackImage}
            />

            <span className="absolute top-5 left-5">
                <Badge badge={item.badge} />
            </span>

            <div className="absolute bottom-6 left-6 right-6 max-w-[540px]">
                <div className="rounded-[20px] bg-white/95 p-5 pb-6 shadow-sm backdrop-blur-sm">
                    <h3 className="lg:text-[22px] text-xl font-bold leading-snug text-accent-secondary">
                        {item.title}
                    </h3>
                    {withDescription && item.description && (
                        <p className="mt-2 text-[16px] font-medium text-secondary">
                            {item.description}
                        </p>
                    )}
                    {item.date && (
                        <p className="mt-3 text-sm text-accent-quinary">{item.date}</p>
                    )}
                </div>
            </div>
        </article>
    )

    if (!href) {
        return card
    }

    return (
        <Link href={href} className="block h-full">
            {card}
        </Link>
    )
}
