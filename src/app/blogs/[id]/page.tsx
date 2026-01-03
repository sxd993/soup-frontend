import { notFound } from "next/navigation"
import { BLOGS, BottomBlogCard, getPriorityBlog, type BlogItem } from "@/entities/Blogs"
import { CommentsSection } from "@/features/Comments/ui/CommentsSection"
import { SectionTitle, AdsBanner, SidePanel, BlogSidePanelCard, type SidePanelItem } from "@/shared/ui"

type BlogSidePanelItem = SidePanelItem & {
  blog: BlogItem
}

type PageProps = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return BLOGS.map((item) => ({
    id: String(item.id),
  }))
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { id } = await params

  const blogItem = BLOGS.find((item) => String(item.id) === id)

  if (!blogItem) {
    notFound()
  }

  const { item: topBlogItem } = getPriorityBlog()
  const topBlogId = topBlogItem?.id
  const relatedBlogs = BLOGS.filter((blog) => blog.id !== topBlogId)
  const sidePanelItems: BlogSidePanelItem[] = relatedBlogs.map((blog) => ({
    id: String(blog.id),
    isAds: blog.isAds,
    blog,
  }))

  return (
    <div className="flex flex-col lg:flex-row gap-5 mt-20">

      {/*  Левая часть страницы */}
      <div className="flex-1 flex flex-col basis-2/3">

        {/*  Заголовок страницы */}
        <SectionTitle title="Блоги" className="mb-5" />

        {/*  Карточка блога */}
        <div className="mt-6 bg-white p-5 rounded-[20px]">
          <BottomBlogCard blog={blogItem} imageHeight={null} />
        </div>

        {/*  Раздел комментариев */}
        <div className="mt-12 bg-white p-5 rounded-[20px]">
          <SectionTitle title="Комментарии" className="mb-6 text-secondary! text-[22px]! font-bold!" />
          <CommentsSection />
        </div>

      </div>

      {/*  Правая часть страницы */}
      <div className="basis-1/3 flex flex-col gap-6 lg:mt-20">

        {/* Рекламный баннер */}
        <div className="w-full">
          <AdsBanner hasDescription={true} />
        </div>

        {/* Самое обсуждаемое */}
        <SidePanel
          items={sidePanelItems}
          title="Самое обсуждаемое"
          getHref={(item) => `/blogs/${item.id}`}
          renderItem={(item, href) => {
            return <BlogSidePanelCard item={item.blog} href={href} />
          }}
        />
      </div>
    </div>
  )
}
