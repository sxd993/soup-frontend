import { NEWS, NewsCardSmall } from "@/entities"
import { IMAGES } from "@/shared/config"

export const ScrollNewsList = () => {
    const fallbackImage = IMAGES.hero.background

    return (
        <div className="w-full grid grid-cols-1 gap-6 items-stretch min-h-[350px]">
            <div className="hidden md:grid lg:grid-cols-2 content-between gap-5">
                {NEWS.slice(1, 5).map((n, index) => (
                    <NewsCardSmall
                        key={n.id}
                        item={n}
                        fallbackImage={fallbackImage}
                        withZoom={index === 0}
                        className="w-full h-full max-w-none"
                    />
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {NEWS.slice(1, 4).map((n, index) => (
                    <NewsCardSmall
                        key={n.id}
                        item={n}
                        fallbackImage={fallbackImage}
                        withZoom={index === 0}
                        className="w-full h-full max-w-none"
                    />
                ))}
            </div>
        </div>
    )
}
