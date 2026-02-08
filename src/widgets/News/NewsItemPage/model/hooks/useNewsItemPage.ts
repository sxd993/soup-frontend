"use client"

import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { type NewsItem, getNews, getNewsById } from "@/entities/News"
import type { SidePanelItem } from "@/shared/ui"

export type NewsSidePanelItem = SidePanelItem & {
  news: NewsItem
}

export function useNewsItemPage() {
  const searchParams = useSearchParams()
  const id = searchParams?.get("id") || ""
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null)
  const [allNews, setAllNews] = useState<NewsItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    let active = true
    const load = async () => {
      if (!id) {
        setNewsItem(null)
        setAllNews([])
        setIsLoading(false)
        setIsError(false)
        return
      }

      setIsLoading(true)
      setIsError(false)
      try {
        const [item, list] = await Promise.all([getNewsById(id), getNews()])
        if (!active) return
        setNewsItem(item ?? null)
        setAllNews(list)
      } catch {
        if (active) setIsError(true)
      } finally {
        if (active) setIsLoading(false)
      }
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

  return {
    newsItem,
    isLoading,
    isError,
    isEmpty: !isLoading && !isError && !newsItem,
    sidePanelItems,
  }
}
