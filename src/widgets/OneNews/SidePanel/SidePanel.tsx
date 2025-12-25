import { NewsCardSmall } from "@/entities"
import { NewsItem } from "@/entities/News/model/types"
import { AdsBanner } from "@/widgets/AdsBanner/AdsBanner"

type SidePanelProps = {
    relatedNews: NewsItem[]
}

export function SidePanel({ relatedNews }: SidePanelProps) {
    const visibleNews = relatedNews.filter((item) => !item.isAds)

    return (
        <aside className="w-full shrink-0 flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-secondary mb-4">Новости по теме</h3>
            
            {/* Мобильная версия: вертикальный список с баннером между новостями */}
            <div className="flex flex-col gap-5 md:hidden">
                {relatedNews.map((item, index) => (
                    <div key={item.id}>
                        <NewsCardSmall
                            item={item}
                            className="w-full"
                            href={`/news/${item.id}`}
                        />
                        {/* Баннер после второй новости */}
                        {index === 1 && (
                            <div className="mt-5">
                                <AdsBanner hasDescription={true} />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* md версия: сетка 2x2 */}
            <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-5">
                {/* Первые две новости */}
                {relatedNews.slice(0, 2).map((item) => (
                    <NewsCardSmall
                        key={item.id}
                        item={item}
                        className="w-full"
                        href={`/news/${item.id}`}
                    />
                ))}
                
                {/* Баннер слева в нижнем ряду */}
                <div>
                    <AdsBanner hasDescription={true} />
                </div>
                
                {/* Третья новость справа в нижнем ряду и остальные */}
                {relatedNews.slice(2).map((item) => (
                    <NewsCardSmall
                        key={item.id}
                        item={item}
                        className="w-full"
                        href={`/news/${item.id}`}
                    />
                ))}
            </div>

            {/* lg+ версия: вертикальный список с баннером между новостями */}
            <div className="hidden lg:flex lg:flex-col gap-5">
                {relatedNews.map((item, index) => (
                    <div key={item.id}>
                        <NewsCardSmall
                            item={item}
                            className="w-full"
                            href={`/news/${item.id}`}
                        />
                        {/* Баннер после второй новости */}
                        {index === 1 && (
                            <div className="mt-5">
                                <AdsBanner hasDescription={true} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </aside>
    )
}

export default SidePanel