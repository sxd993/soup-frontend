"use client"

import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { NewsContent, type NewsItem, getNews, getNewsById } from "@/entities/News"
import { NewsSidePanelCard } from "@/widgets/News"
import { SidePanel, type SidePanelItem } from "@/shared/ui"

type NewsSidePanelItem = SidePanelItem & {
  news: NewsItem
}

export default function NewsItemClient() {
  const searchParams = useSearchParams()
  const id = searchParams?.get("id") || ""
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null)
  const [allNews, setAllNews] = useState<NewsItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let active = true
    const load = async () => {
      if (!id) {
        setNewsItem(null)
        setAllNews([])
        setIsLoading(false)
        return
      }

      setIsLoading(true)
      const [item, list] = await Promise.all([getNewsById(id), getNews()])
      if (!active) return
      setNewsItem(item ?? null)
      setAllNews(list)
      setIsLoading(false)
    }

    void load()
    return () => {
      active = false
    }
  }, [id])

  const sidePanelItems: NewsSidePanelItem[] = useMemo(() => {
    if (!newsItem) return []
    return allNews
      .filter((item) => item.id !== id && (item.isAds || item.category === newsItem.category))
      .map((item) => ({
        id: item.id,
        isAds: item.isAds,
        news: item,
      }))
  }, [allNews, id, newsItem])

  if (isLoading) {
    return <div className="mt-10 text-secondary">Загрузка...</div>
  }

  if (!newsItem) {
    return <div className="mt-10 text-secondary">Новость не найдена</div>
  }

  return (
    <div className="flex flex-col lg:flex-row gap-15 lg:gap-40 mt-10">
      <div className="flex-1 flex flex-col gap-6 basis-4/6">
        <NewsContent newsItem={newsItem} />
      </div>
      <div className="basis-2/10">
        <SidePanel
          items={sidePanelItems}
          title="Новости по теме"
          getHref={(item) => `/news/item?id=${item.id}`}
          renderItem={(item, href) => {
            return <NewsSidePanelCard item={item.news} href={href} />
          }}
        />
      </div>
    </div>
  )
}
