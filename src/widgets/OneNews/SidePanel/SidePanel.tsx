import { Fragment } from "react"
import { NewsItem } from "@/entities/News/model/types"
import { AdsBanner } from "@/shared/ui/AdsBanner"
import { SidePanelCard } from "./SidePanelCard"

type SidePanelProps = {
    relatedNews: NewsItem[]
}

export function SidePanel({ relatedNews }: SidePanelProps) {
    return (
        <aside className="w-full shrink-0 flex flex-col gap-6">
            <h2 className="text-3xl lg:text-2xl font-semibold leading-[110%] text-secondary mb-2 text-nowrap">Новости по теме</h2>

            {/* Мобильная версия: вертикальный список с баннером между новостями */}
            <div className="flex flex-col gap-6  md:hidden">
                {relatedNews.map((item) => (
                    <Fragment key={item.id}>
                        {item.isAds ? (
                            <AdsBanner hasDescription={false} />
                        ) : (
                            <SidePanelCard item={item} href={`/news/${item.id}`} />
                        )}
                    </Fragment>
                ))}
            </div>

            {/* md версия: сетка 2x2 */}
            <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-7">
                {relatedNews.map((item) => (
                    <Fragment key={item.id}>
                        {item.isAds ? (
                            <AdsBanner hasDescription={false} />
                        ) : (
                            <SidePanelCard item={item} href={`/news/${item.id}`} />
                        )}
                    </Fragment>
                ))}
            </div>

            {/* lg+ версия: вертикальный список с баннером между новостями */}
            <div className="hidden lg:flex lg:flex-col gap-9">
                {relatedNews.map((item) => (
                    <Fragment key={item.id}>
                        {item.isAds ? (
                            <AdsBanner hasDescription={false} />
                        ) : (
                            <SidePanelCard item={item} href={`/news/${item.id}`} />
                        )}
                    </Fragment>
                ))}
            </div>
        </aside>
    )
}

export default SidePanel
