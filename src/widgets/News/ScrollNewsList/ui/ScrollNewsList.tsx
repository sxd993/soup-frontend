import { NEWS, NewsCardSmall } from "@/entities"
import { IMAGES } from "@/shared/config"
import { AdsBanner } from "@/widgets/AdsBanner/AdsBanner"

export const ScrollNewsList = () => {
    const fallbackImage = IMAGES.hero.background

    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch mt-7 lg:mt-25 min-h-[350px]">
            <div className="hidden md:grid grid-cols-2 content-between gap-5">
                <div className="h-full block">
                    <AdsBanner />
                </div>
                <div className="md:flex md:flex-col">
                    {NEWS.slice(1, 3).map((n, index) => (
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-3 gap-6 items-stretch">
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
