"use client"

import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { getBlogs, getBlogById, BottomBlogCard } from "@/entities/Blogs"
import { BlogContentBlocks } from "@/features/Profile/CompanyAccount/BlogSection"
import { BlogSidePanelCard } from "@/widgets/Blogs"
import { SectionTitle, AdsBanner, SidePanel, type SidePanelItem } from "@/shared/ui"
import type { Blog } from "@/entities/Blogs"

type BlogSidePanelItem = SidePanelItem & { blog: Blog }

export default function BlogsItemClient() {
  const searchParams = useSearchParams()
  const blogId = searchParams?.get("id") || ""
  const [blog, setBlog] = useState<Blog | null>(null)
  const [allBlogs, setAllBlogs] = useState<Blog[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let active = true
    const load = async () => {
      if (!blogId) {
        setBlog(null)
        setAllBlogs([])
        setIsLoading(false)
        return
      }

      setIsLoading(true)
      const [blogData, blogsData] = await Promise.all([getBlogById(blogId), getBlogs()])
      if (!active) return
      setBlog(blogData)
      setAllBlogs(blogsData)
      setIsLoading(false)
    }

    void load()
    return () => {
      active = false
    }
  }, [blogId])

  const sidePanelItems: BlogSidePanelItem[] = useMemo(
    () =>
      allBlogs
        .filter((item) => item.id !== blogId)
        .slice(0, 5)
        .map((item) => ({
          id: item.id,
          isAds: false,
          blog: item,
        })),
    [allBlogs, blogId]
  )

  if (isLoading) {
    return <div className="mt-20 text-secondary">Загрузка...</div>
  }

  if (!blog) {
    return <div className="mt-20 text-secondary">Блог не найден</div>
  }

  return (
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
            <BlogSidePanelCard item={(item as BlogSidePanelItem).blog} href={href} />
          )}
        />
      </div>
    </div>
  )
}
