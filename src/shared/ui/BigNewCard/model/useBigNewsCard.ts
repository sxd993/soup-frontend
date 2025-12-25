import { NEWS } from "@/entities"
import { IMAGES } from "@/shared/config"

export const useBigNewsCard = () => {
    const priorityItem = NEWS.find((newsItem) => newsItem.isImportantNew && !newsItem.isAds)
    const fallbackItem = NEWS.find((newsItem) => !newsItem.isAds)
    const item = priorityItem ?? fallbackItem ?? NEWS[0]
    const href = item ? `/news/${item.id}` : ""
    const fallbackImage = IMAGES.hero.background

    return { item, href, fallbackImage }
}
