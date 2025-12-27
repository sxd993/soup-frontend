import { Fragment, ReactNode } from "react"
import { AdsBanner } from "@/shared"
import { SidePanelCard } from "./SidePanelCard"

type SidePanelItem = {
    id: string
    image: string
    imageAlt: string
    title: string
    badge?: string
    isAds?: boolean
    description?: string
}

type SidePanelProps<T extends SidePanelItem> = {
    items: T[]
    title?: string
    getHref: (item: T) => string
    renderAds?: (item: T) => ReactNode
    renderItem?: (item: T, href: string) => ReactNode
    className?: string
}

export function SidePanel<T extends SidePanelItem>({ 
    items, 
    title = "По теме",
    getHref,
    renderAds,
    renderItem,
    className
}: SidePanelProps<T>) {
    const defaultRenderAds = (item: T) => (
        <div className="w-full h-full max-w-none">
            <AdsBanner hasDescription={Boolean(item.description)} />
        </div>
    )
    const renderAdsBanner = renderAds || defaultRenderAds
    
    const defaultRenderItem = (item: T, href: string) => (
        <SidePanelCard
            image={item.image}
            imageAlt={item.imageAlt}
            title={item.title}
            badge={item.badge}
            href={href}
        />
    )
    const renderItemCard = renderItem || defaultRenderItem

    return (
        <aside className={`w-full shrink-0 flex flex-col gap-6 ${className ?? ""}`}>
            <h2 className="text-3xl lg:text-2xl font-semibold leading-[110%] text-secondary mb-2 text-nowrap">{title}</h2>

            {/* Мобильная версия: вертикальный список с баннером между новостями */}
            <div className="flex flex-col gap-6 md:hidden">
                {items.map((item) => (
                    <Fragment key={item.id}>
                        {item.isAds ? (
                            renderAdsBanner(item)
                        ) : (
                            renderItemCard(item, getHref(item))
                        )}
                    </Fragment>
                ))}
            </div>

            {/* md версия: сетка 2x2 */}
            <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-7">
                {items.map((item) => (
                    <Fragment key={item.id}>
                        {item.isAds ? (
                            renderAdsBanner(item)
                        ) : (
                            renderItemCard(item, getHref(item))
                        )}
                    </Fragment>
                ))}
            </div>

            {/* lg+ версия: вертикальный список с баннером между новостями */}
            <div className="hidden lg:flex lg:flex-col gap-9">
                {items.map((item) => (
                    <Fragment key={item.id}>
                        {item.isAds ? (
                            renderAdsBanner(item)
                        ) : (
                            renderItemCard(item, getHref(item))
                        )}
                    </Fragment>
                ))}
            </div>
        </aside>
    )
}

