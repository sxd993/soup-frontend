import { NEWS } from "@/entities"
import { IMAGES } from "@/shared/config"

export const useBigNewsCard = () => {
    const item = NEWS[0]
    const href = item ? `/news/${item.id}` : ""
    const fallbackImage = IMAGES.hero.background

    return { item, href, fallbackImage }
}
