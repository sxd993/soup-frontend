"use client"

import { StateProvider } from "@/app/providers/State/StateProvider"
import { BottomBlogCard } from "@/entities/Blogs"
import { useCompanyBlogList, type CompanyBlogListCardProps } from ".."

export const CompanyBlogList = () => {
  const { isLoading, isError, isEmpty, cards } = useCompanyBlogList()

  return (
    <StateProvider
      isLoading={isLoading}
      isError={isError}
      isEmpty={isEmpty}
      loadingMessage="Загружаем блоги..."
      errorMessage="Не удалось загрузить блоги"
      emptyMessage="У вашей компании пока нет блогов"
    >
      <div className="flex flex-col gap-5">
        {cards.map((card: CompanyBlogListCardProps) => (
          <div key={card.blog.id} className="bg-white p-5 rounded-[20px]">
            <BottomBlogCard
              blog={card.blog}
              href={card.href}
              imageHeight={null}
              menuItems={card.menuItems}
              onMenuSelect={card.onMenuSelect}
            />
          </div>
        ))}
      </div>
    </StateProvider>
  )
}