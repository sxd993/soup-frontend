import { notFound } from "next/navigation"
import { getBlogs, getBlogById, BottomBlogCard, BlogContentBlocks } from "@/entities/Blogs"
import { BlogSidePanelCard } from "@/widgets/Blogs"
import { SectionTitle, AdsBanner, SidePanel, type SidePanelItem } from "@/shared/ui"
import type { Blog } from "@/entities/Blogs"

type BlogSidePanelItem = SidePanelItem & { blog: Blog }

type PageProps = {
  params: Promise<{ id: string }>
}

// Страница отдельного блога
export default async function BlogDetailPage({ params }: PageProps) {
  const { id } = await params

  const [blog, allBlogs] = await Promise.all([getBlogById(id), getBlogs()])

  if (!blog) {
    notFound()
  }

  const relatedBlogs = allBlogs.filter((b) => b.id !== id)
  const sidePanelItems: BlogSidePanelItem[] = relatedBlogs.slice(0, 5).map((blog) => ({
    id: blog.id,
    isAds: false,
    blog,
  }))

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
          getHref={(item) => `/blogs/${item.id}`}
          renderItem={(item, href) => (
            <BlogSidePanelCard item={(item as BlogSidePanelItem).blog} href={href} />
          )}
        />
      </div>
    </div>
  )
}