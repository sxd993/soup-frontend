import { ReactNode } from "react"

export type SidePanelItem = {
    id: string
    image: string
    imageAlt: string
    title: string
    badge?: string
    isAds?: boolean
    description?: string
}

export type SidePanelProps<T extends SidePanelItem> = {
    items: T[]
    title?: string
    getHref: (item: T) => string
    renderAds?: (item: T) => ReactNode
    renderItem?: (item: T, href: string) => ReactNode
    className?: string
}
