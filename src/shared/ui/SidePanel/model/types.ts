import { ReactNode } from "react"

// Минимальный базовый тип - только обязательные поля для SidePanel
export type SidePanelItem = {
    id: string
    isAds?: boolean
    description?: string
    [key: string]: unknown
}

export type SidePanelProps<T extends SidePanelItem> = {
    items: T[]
    title?: string
    getHref: (item: T) => string
    renderItem: (item: T, href: string) => ReactNode
    renderAds?: (item: T) => ReactNode
    className?: string
}
