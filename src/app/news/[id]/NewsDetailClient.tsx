'use client';

import { NewsContent, useNews, useNewsById, NEWS_MESSAGES, type NewsItem } from "@/entities/News"
import { SidePanel, NewsSidePanelCard, type SidePanelItem, QueryState } from "@/shared/ui"

type NewsSidePanelItem = SidePanelItem & {
  news: NewsItem
}

type NewsDetailClientProps = {
  id: string
}

// Клиентский компонент для страницы новости {использует React Query хуки}
export function NewsDetailClient({ id }: NewsDetailClientProps) {
  const { data: allNews = [] } = useNews()
  const { data: newsItem, isLoading, isError } = useNewsById(id)

  const relatedNews = allNews.filter((item) => item.id !== id)
  
  const sidePanelItems: NewsSidePanelItem[] = relatedNews.map((item) => ({
    id: item.id,
    isAds: item.isAds,
    news: item,
  }))

  return (
    <QueryState
      isLoading={isLoading}
      isError={isError}
      isEmpty={!isLoading && !newsItem}
      loadingMessage={NEWS_MESSAGES.loading}
      errorMessage={NEWS_MESSAGES.error}
      emptyMessage={NEWS_MESSAGES.notFound}
    >
      {newsItem && (
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
      )}
    </QueryState>
  )
}