import { notFound } from "next/navigation"
import { NEWS } from "@/entities"
import { SidePanel } from "@/widgets/OneNews/SidePanel/SidePanel"
import { NewsContent } from "@/widgets/OneNews/NewsContent/NewsContent"

export type NewsPageParams = {
    params: Promise<{ id: string }>
}

export default async function NewsDetailPage({ params }: NewsPageParams) {
    const { id } = await params
    const newsItem = NEWS.find((item) => item.id === id)

    if (!newsItem) {
        notFound()
    }

    const relatedNews = NEWS.filter((item) => item.id !== newsItem.id)

    return (
        <div className="flex flex-col lg:flex-row gap-40 mt-10">
            <div className="flex-1 flex flex-col gap-6 basis-4/6">
                <NewsContent newsItem={newsItem} />
            </div>
            <div className="basis-2/10">
                <SidePanel relatedNews={relatedNews} />
            </div>
        </div>
    )
}