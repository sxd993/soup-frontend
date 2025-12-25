import { notFound } from "next/navigation"
import { NEWS } from "@/entities"
import { SidePanel } from "@/widgets/OneNews/SidePanel/SidePanel"

export type NewsPageParams = {
    params: { id: string }
}

export default function NewsDetailPage({ params }: NewsPageParams) {
    const newsItem = NEWS.find((item) => item.id === params.id)

    if (!newsItem) {
        notFound()
    }

    const relatedNews = NEWS.filter((item) => item.id !== newsItem.id)

    return (
        <div className="flex flex-col lg:flex-row gap-40 mt-10">
            <div className="flex-1 flex flex-col gap-6 basis-4/6">

            </div>
            <div className="basis-2/10">
                <SidePanel relatedNews={relatedNews} />
            </div>
        </div>
    )
}
