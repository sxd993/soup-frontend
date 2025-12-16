import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { NEWS, NewsCardBig, NewsCardSmall } from "@/entities"
import { IMAGES } from "@/shared/config"

type NewsPageParams = {
    params: { id: string }
}

export async function generateStaticParams() {
    return NEWS.map((item) => ({ id: item.id }))
}

export async function generateMetadata({ params }: NewsPageParams): Promise<Metadata> {
    const current = NEWS.find((item) => item.id === params.id)

    if (!current) {
        return {
            title: "Новость",
        }
    }

    return {
        title: `${current.title} | Новости`,
        description: current.description,
    }
}

export default function NewsDetailPage({ params }: NewsPageParams) {
    const newsItem = NEWS.find((item) => item.id === params.id)

    if (!newsItem) {
        notFound()
    }

    const fallbackImage = IMAGES.hero.background
    const relatedNews = NEWS.filter((item) => item.id !== newsItem.id)

    return (
        <div className="flex flex-col lg:flex-row gap-8 mt-10">
            <div className="flex-1 flex flex-col gap-6">
                <NewsCardBig
                    item={newsItem}
                    fallbackImage={fallbackImage}
                    withDescription
                    withZoom={false}
                    className="min-h-[640px]"
                />

                <article className="rounded-[30px] bg-white p-6 md:p-8 border border-[#EFEFEF] shadow-sm">
                    <div className="flex items-center justify-between gap-4 mb-4">
                        <h1 className="text-2xl md:text-3xl font-bold leading-snug text-secondary">
                            {newsItem.title}
                        </h1>
                        {newsItem.date && (
                            <span className="text-sm text-accent-quinary whitespace-nowrap">{newsItem.date}</span>
                        )}
                    </div>

                    {newsItem.content?.map((paragraph, index) => (
                        <p
                            key={index}
                            className="text-base md:text-lg text-secondary-quinary leading-relaxed mt-3"
                        >
                            {paragraph}
                        </p>
                    ))}

                    {!newsItem.content?.length && newsItem.description && (
                        <p className="text-base md:text-lg text-secondary-quinary leading-relaxed">
                            {newsItem.description}
                        </p>
                    )}
                </article>
            </div>

            <aside className="w-full lg:max-w-[360px] flex-shrink-0">
                <h3 className="text-lg font-semibold text-secondary mb-4">Другие новости</h3>
                <div className="grid gap-5">
                    {relatedNews.map((item, index) => (
                        <NewsCardSmall
                            key={item.id}
                            item={item}
                            fallbackImage={fallbackImage}
                            withZoom={index === 0}
                            href={`/news/${item.id}`}
                        />
                    ))}
                </div>
            </aside>
        </div>
    )
}
