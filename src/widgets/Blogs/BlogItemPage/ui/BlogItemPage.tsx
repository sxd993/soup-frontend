"use client"

import { BottomBlogCard } from "@/entities/Blogs"
import { BlogContentBlocks } from "@/features/Profile/CompanyAccount/BlogSection"
import { SectionTitle, AdsBanner, SidePanel } from "@/shared/ui"
import { StateProvider } from "@/app/providers/State/StateProvider"
import { BlogItemSkeleton } from "./BlogItemSkeleton"
import { useBlogItemPage, type BlogSidePanelItem } from "../model/hooks/useBlogItemPage"

export function BlogItemPage() {
  const { blog, isLoading, isError, isEmpty, sidePanelItems } = useBlogItemPage()

  return (
    <StateProvider
      isLoading={isLoading}
      isError={isError}
      isEmpty={isEmpty}
      errorTitle="Не удалось загрузить блог"
      loadingComponent={<BlogItemSkeleton />}
    >
      {blog && (
        <div className="flex flex-col lg:flex-row gap-5 mt-20">
          <div className="flex-1 flex flex-col basis-2/3">
            <SectionTitle title="Блоги" className="mb-5" />
            <div className="mt-6 bg-white p-5 rounded-[20px]">
              <BottomBlogCard blog={blog} imageHeight={null} />
              <BlogContentBlocks blocks={blog.contentBlocks} />
            </div>
          </div>
          <div className="basis-1/3 flex flex-col gap-6 lg:mt-20">
            <div className="w-full">
              <AdsBanner hasDescription={true} />
            </div>
            <SidePanel
              items={sidePanelItems}
              title="Самое обсуждаемое"
              getHref={(item) => `/blogs/item?id=${item.id}`}
              renderItem={(item, href) => (
                <BottomBlogCard blog={(item as BlogSidePanelItem).blog} href={href} />
              )}
            />
          </div>
        </div>
      )}
    </StateProvider>
  )
}
