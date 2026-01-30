import { notFound } from "next/navigation"
import { getBlogs, getBlogById, BottomBlogCard } from "@/entities/Blogs"
import { CommentsSection } from "@/features/Comments/ui/CommentsSection"
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
        </div>
        <div className="mt-12 bg-white p-5 rounded-[20px]">
          <SectionTitle title="Комментарии" className="mb-6 text-secondary! text-[22px]! font-bold!" />
          <CommentsSection />
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
