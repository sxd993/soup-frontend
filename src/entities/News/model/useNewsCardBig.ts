import { NEWS } from "./news"
import { NewsItem } from "./types"
import { IMAGES } from "@/shared/config"

export const getPriorityNews = (): { 
    item: NewsItem | undefined; 
    href: string; 
    fallbackImage: string 
} => {
    const priorityItem = NEWS.find((newsItem) => newsItem.isImportantNew && !newsItem.isAds)
    const fallbackItem = NEWS.find((newsItem) => !newsItem.isAds)
    const item = priorityItem ?? fallbackItem ?? NEWS[0]
    const href = item ? `/news/${item.id}` : ""
    const fallbackImage = IMAGES.hero.background

    return { item, href, fallbackImage }
}