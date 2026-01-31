"use client"

import { StateProvider } from "@/app/providers/State/StateProvider"
import { BottomBlogCard } from "@/entities/Blogs"
import type { Blog } from "@/entities/Blogs"
import { useCompanyBlogTabsStore } from "../../blog-tabs/model/store/useCompanyBlogTabsStore"
import { useCompanyBlogs } from "../model/hooks/useCompanyBlogs"
import type { CompanyBlogItem } from "../model/types/company-blog.types"

function toBlog(item: CompanyBlogItem): Blog {
  return {
    id: item.id,
    companyId: 0,
    title: item.title,
    description: item.description,
    imageUrl: item.imageUrl,
    contentBlocks: item.contentBlocks,
    createdAt: item.createdAt,
    status: item.type,
    isPinned: item.isPinned,
    company: { name: item.companyName, logo_url: item.companyLogoUrl },
  }
}

export const CompanyBlogList = () => {
  const selectedStatus = useCompanyBlogTabsStore((state) => state.selectedStatus)
  const { data: blogs = [], isLoading, isError } = useCompanyBlogs(selectedStatus)

  const isEmpty = !isLoading && !isError && blogs.length === 0

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
        {blogs.map((item) => {
          const blog = toBlog(item)
          const href = item.type === "published" ? `/blogs/${item.id}` : undefined
          return (
            <div key={item.id} className="bg-white p-5 rounded-[20px]">
              <BottomBlogCard blog={blog} href={href} imageHeight={null} />
            </div>
          )
        })}
      </div>
    </StateProvider>
  )
}