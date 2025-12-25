"use client"

import { NEWS, NewsListItem } from "@/entities"

export const ScrollNewsList = () => {
    return (
        <div className="w-full grid grid-cols-1 gap-6 items-stretch min-h-[350px]">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 content-between gap-5">
                {NEWS.map((n) => (
                    <NewsListItem
                        key={n.id}
                        href={`/news/${n.id}`}
                        item={n}
                        className="w-full h-full max-w-none"
                    />
                ))}
            </div>
        </div>
    )
}
