import { notFound } from "next/navigation"
import { NEWS, NewsContent, type NewsItem } from "@/entities/News"
import { SidePanel, NewsSidePanelCard, type SidePanelItem } from "@/shared/ui"

type NewsSidePanelItem = SidePanelItem & {
  news: NewsItem
}

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
  
  const sidePanelItems: NewsSidePanelItem[] = relatedNews.map((item) => ({
    id: item.id,
    isAds: item.isAds,
    news: item,
  }))

  return (
    <div className="flex flex-col lg:flex-row gap-15 lg:gap-40 mt-10">
      <div className="flex-1 flex flex-col gap-6 basis-4/6">
        <NewsContent newsItem={newsItem} />
      </div>
      <div className="basis-2/10">
        <SidePanel
          items={sidePanelItems}
          title="Новости по теме"
          getHref={(item) => `/news/${item.id}`}
          renderItem={(item, href) => {
            return <NewsSidePanelCard item={item.news} href={href} />
          }}
        />
      </div>
    </div>
  )
}
