import { NewsCardSmall } from "@/entities/News"
import type { NewsItem } from "@/entities/News"
import { AdsBanner } from "@/shared/ui"

interface ScrollNewsListProps {
    news: NewsItem[]
}

export const ScrollNewsList = ({ news }: ScrollNewsListProps) => {
    return (
        <div className="w-full grid grid-cols-1 gap-6 items-stretch min-h-87.5">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 content-between gap-5">
                {news.map((n) => {
                    if (n.isAds) {
                        return (
                            <div key={n.id} className="w-full h-full max-w-none">
                                <AdsBanner hasDescription={Boolean(n.description)} />
                            </div>
                        )
                    }
                    return (
                        <NewsCardSmall
                            key={n.id}
                            href={`/news/item?id=${n.id}`}
                            item={n}
                            className="w-full h-full max-w-none"
                        />
                    )
                })}
            </div>
        </div>
    )
}
