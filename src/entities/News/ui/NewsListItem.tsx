"use client"

import { NewsCardSmall } from "./NewsCardSmall"
import { NewsItem } from "../model/types"
import { AdsBanner } from "@/shared/ui/AdsBanner"

type NewsListItemProps = {
    item: NewsItem
    href?: string
    className?: string
}

export const NewsListItem = ({ item, href, className }: NewsListItemProps) => {
    if (item.isAds) {
        return (
            <div className={className ?? ""}>
                <AdsBanner hasDescription={Boolean(item.description)} />
            </div>
        )
    }

    return (
        <NewsCardSmall
            item={item}
            href={href}
            className={className}
        />
    )
}
