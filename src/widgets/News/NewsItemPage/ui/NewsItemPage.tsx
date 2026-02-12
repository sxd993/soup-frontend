"use client"

import { NewsContent } from "@/entities/News"
import { NewsSidePanelCard } from "../../ui/NewsSidePanelCard"
import { SidePanel } from "@/shared/ui"
import { StateProvider } from "@/app/providers/State/StateProvider"
import { NewsItemSkeleton } from "./NewsItemSkeleton"
import { useNewsItemPage, type NewsSidePanelItem } from "../model/hooks/useNewsItemPage"

export function NewsItemPage() {
  const { newsItem, isLoading, isError, isEmpty, sidePanelItems } = useNewsItemPage()

  return (
    <StateProvider
      isLoading={isLoading}
      isError={isError}
      isEmpty={isEmpty}
      errorTitle="Не удалось загрузить новость"
      loadingComponent={<NewsItemSkeleton />}
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
              getHref={(item) => `/news/item?id=${item.id}`}
              renderItem={(item, href) => (
                <NewsSidePanelCard item={(item as NewsSidePanelItem).news} href={href} />
              )}
            />
          </div>
        </div>
      )}
    </StateProvider>
  )
}
