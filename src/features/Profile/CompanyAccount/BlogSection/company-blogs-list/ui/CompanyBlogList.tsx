"use client"

import { StateProvider } from "@/app/providers/State/StateProvider"
import { BottomBlogCard } from "@/entities/Blogs"
import { useCompanyBlogList, type CompanyBlogListCardProps } from ".."
import { CompanyBlogListSkeleton } from "./CompanyBlogListSkeleton"
import { CompanyBlogCardMenu } from "./CompanyBlogCardMenu"

export const CompanyBlogList = () => {
  const { isLoading, isError, isEmpty, cards } = useCompanyBlogList()

  return (
    <StateProvider
      isLoading={isLoading}
      isError={isError}
      isEmpty={isEmpty}
      loadingComponent={<CompanyBlogListSkeleton />}
      errorTitle="Не удалось загрузить блоги"
    >
      <div className="flex flex-col gap-5">
        {cards.map((card: CompanyBlogListCardProps) => (
          <div key={card.blog.id} className="bg-white p-5 rounded-[20px]">
            <BottomBlogCard
              blog={card.blog}
              href={card.href}
              showPinnedIcon={true}
              headerActions={
                card.menuItems.length > 0 ? (
                  <CompanyBlogCardMenu
                    items={card.menuItems}
                    onSelect={card.onMenuSelect}
                  />
                ) : undefined
              }
            />
          </div>
        ))}
      </div>
    </StateProvider>
  )
}
