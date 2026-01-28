import Link from "next/link"
import Image from "next/image"
import type { NewsItem } from ".."
import { Badge } from "@/shared/ui"
import { formatDate } from "@/shared/lib"

type NewsContentProps = {
    newsItem: NewsItem
}

export function NewsContent({ newsItem }: NewsContentProps) {
    const badgeHref = newsItem.category
        ? `/news?badge=${encodeURIComponent(newsItem.category)}`
        : undefined

    return (
        <article className="flex flex-col gap-6">
            {/* Изображение */}
            <div className="relative w-full h-[400px] md:h-[520px] overflow-hidden rounded-[40px] group">
                <Image
                    src={newsItem.image}
                    alt={newsItem.imageAlt}
                    fill
                    className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-5 left-5">
                    {badgeHref ? (
                        <Link href={badgeHref} className="relative z-20">
                            <Badge badge={newsItem.category} />
                        </Link>
                    ) : (
                        <Badge badge={newsItem.category} />
                    )}
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

            {newsItem.author && (
                <p className="text-base text-secondary leading-relaxed">
                    Фото: {newsItem.author}
                </p>
            )}

            {/* Дата внизу справа */}
            {newsItem.createdAt && (
                <div className="flex justify-end">
                    <p className="text-sm text-accent-quinary">
                        {formatDate(newsItem.createdAt)}
                    </p>
                </div>
            )}
        </article>
    )
}