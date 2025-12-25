import { NewsCardSmall } from "@/entities"
import { NewsItem } from "@/entities/News/model/types"

type SidePanelProps = {
    relatedNews: NewsItem[]
}

export function SidePanel({ relatedNews }: SidePanelProps) {
    const visibleNews = relatedNews.filter((item) => !item.isAds)

    return (
        <aside className="w-full shrink-0">
            <h3 className="text-lg font-semibold text-secondary mb-4">Новости по теме</h3>
            <div className="grid gap-5">
                {visibleNews.map((item) => (
                    <NewsCardSmall
                        key={item.id}
                        item={item}
                        className="w-full max-w-[320px]"
                        href={`/news/${item.id}`}
                    />
                ))}
            </div>
        </aside>
    )
}

export default SidePanel
