import Image from "next/image"
import { NewsItem } from "../model/types"
import { Badge } from "@/shared"

type NewsContentProps = {
    newsItem: NewsItem
}

export function NewsContent({ newsItem }: NewsContentProps) {
    return (
        <article className="flex flex-col gap-6">
            {/* Изображение */}
            <div className="relative w-full h-[400px] md:h-[520px] overflow-hidden rounded-[40px]">
                <Image
                    src={newsItem.image}
                    alt={newsItem.imageAlt}
                    fill
                    className="object-cover"
                />
                <span className="absolute top-5 left-5">
                    <Badge badge={newsItem.badge} />
                </span>
            </div>

            {/* Заголовок */}
            <h1 className="text-2xl md:text-3xl font-bold leading-tight text-accent-secondary">
                {newsItem.title}
            </h1>

            {/* Контент */}
            {newsItem.content && newsItem.content.length > 0 && (
                <div className="flex flex-col gap-4">
                    {newsItem.content.map((paragraph, index) => (
                        <p
                            key={index}
                            className="text-base text-secondary leading-relaxed"
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
            )}

            {/* Дата внизу справа */}
            {newsItem.date && (
                <div className="flex justify-end">
                    <p className="text-sm text-accent-quinary">{newsItem.date}</p>
                </div>
            )}
        </article>
    )
}