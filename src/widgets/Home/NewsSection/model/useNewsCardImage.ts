import { useState } from "react"
import { NewsItem } from "./types"

export const useNewsCardImage = (item: NewsItem, withZoom: boolean) => {
    const [isHovered, setIsHovered] = useState(false)
    const shouldChangeImage = !withZoom && item.hoverImage
    const currentImage = shouldChangeImage && isHovered ? item.hoverImage : item.image

    const handleMouseEnter = () => {
        if (shouldChangeImage) {
            setIsHovered(true)
        }
    }

    const handleMouseLeave = () => {
        if (shouldChangeImage) {
            setIsHovered(false)
        }
    }

    return {
        currentImage,
        handleMouseEnter,
        handleMouseLeave
    }
}