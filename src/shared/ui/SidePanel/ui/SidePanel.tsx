import { Fragment } from "react"
import { AdsBanner } from "@/shared/ui"
import type { SidePanelItem, SidePanelProps } from "../model/types"

export function SidePanel<T extends SidePanelItem>({ 
    items, 
    title = "По теме",
    getHref,
    renderItem,
    renderAds,
    className
}: SidePanelProps<T>) {
    const defaultRenderAds = (item: T) => (
        <div className="w-full h-full max-w-none">
            <AdsBanner hasDescription={Boolean((item as any).description)} />
        </div>
    )
    const renderAdsBanner = renderAds || defaultRenderAds

    return (
        <aside className={`w-full shrink-0 flex flex-col gap-6 ${className ?? ""}`}>
            <h2 className="text-3xl lg:text-2xl font-semibold leading-[110%] text-secondary mb-2 text-nowrap">
                {title}
            </h2>

            {/* Мобильная версия */}
            <div className="flex flex-col gap-6 md:hidden">
                {items.map((item) => (
                    <Fragment key={item.id}>
                        {item.isAds ? (
                            renderAdsBanner(item)
                        ) : (
                            renderItem(item, getHref(item))
                        )}
                    </Fragment>
                ))}
            </div>

            {/* md версия */}
            <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-7">
                {items.map((item) => (
                    <Fragment key={item.id}>
                        {item.isAds ? (
                            renderAdsBanner(item)
                        ) : (
                            renderItem(item, getHref(item))
                        )}
                    </Fragment>
                ))}
            </div>

            {/* lg+ версия */}
            <div className="hidden lg:flex lg:flex-col gap-9">
                {items.map((item) => (
                    <Fragment key={item.id}>
                        {item.isAds ? (
                            renderAdsBanner(item)
                        ) : (
                            renderItem(item, getHref(item))
                        )}
                    </Fragment>
                ))}
            </div>
        </aside>
    )
}