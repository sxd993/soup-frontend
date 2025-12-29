"use client"

import { NEWS, NewsCardSmall } from "@/entities/News"
import { AdsBanner } from "@/shared/ui"

export const ScrollNewsList = () => {
    return (
        <div className="w-full grid grid-cols-1 gap-6 items-stretch min-h-[350px]">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 content-between gap-5">
                {NEWS.map((n) => {
                    if (n.isAds) {
                        return (
                            <div key={n.id} className="w-full h-full max-w-none">
                                <AdsBanner hasDescription={Boolean(n.description)} />
                            </div>
                        )
                    }
                    return (
                        <NewsCardSmall
                            key={n.id}
                            href={`/news/${n.id}`}
                            item={n}
                            className="w-full h-full max-w-none"
                        />
                    )
                })}
            </div>
        </div>
    )
}