"use client"

import Image from "next/image"
import { NewsItem } from "../model/types"
import { useNewsCardImage } from "../model/useNewsCardImage"

type NewsCardProps = {
    item: NewsItem
    fallbackImage: string
    featured?: boolean
    withZoom?: boolean
}

export const NewsCard = ({ item, fallbackImage, withZoom = false }: NewsCardProps) => {
    const { currentImage, handleMouseEnter, handleMouseLeave } = useNewsCardImage(item, withZoom)

    return (
<article className="flex flex-col h-full max-w-[400px] min-h-[350px] overflow-hidden">
    
    {/* Картинка */}
    <div 
        className="relative w-full aspect-square rounded-2xl overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
        <Image
            src={currentImage || fallbackImage}
            alt={item.imageAlt}
            fill
            className={`object-cover transition-all duration-300 ease-in-out ${withZoom ? 'hover:scale-117' : ''}`}
        />

        <span className="absolute top-4 left-3 px-4 py-1 text-[11px] font-medium bg-background hover:bg-accent-tertiary text-secondary rounded-full border border-accent-quaternary">
            {item.badge}
        </span>
    </div>

    {/* Текст */}
    <div className="mt-3">
        <h4 className="text-base lg:text-lg font-bold leading-tight text-secondary">
            {item.title}
        </h4>
    </div>

</article>

    )
}