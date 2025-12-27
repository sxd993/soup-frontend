import { notFound } from "next/navigation"
import { NEWS, NewsContent } from "@/entities"
import { SidePanel } from "@/shared"

type PageProps = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return NEWS.map((item) => ({
    id: item.id,
  }))
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { id } = await params

  const newsItem = NEWS.find((item) => item.id === id)

  if (!newsItem) {
    notFound()
  }

  const relatedNews = NEWS.filter((item) => item.id !== newsItem.id)

  return (
    <div className="flex flex-col lg:flex-row gap-15 lg:gap-40 mt-10">
      <div className="flex-1 flex flex-col gap-6 basis-4/6">
        <NewsContent newsItem={newsItem} />
      </div>
      <div className="basis-2/10">
        <SidePanel
          items={relatedNews}
          title="Новости по теме"
          getHref={(item) => `/news/${item.id}`}
        />
      </div>
    </div>
  )
}