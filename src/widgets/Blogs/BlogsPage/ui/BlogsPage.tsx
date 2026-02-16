import { getBlogs, type Blog, BottomBlogCard } from "@/entities/Blogs"
import { SectionTitle, AdsBanner, SidePanel, type SidePanelItem } from "@/shared/ui"
import { ScrollBlogsList } from "../../ScrollBlogsList"

type BlogSidePanelItem = SidePanelItem & { blog: Blog }

export async function BlogsPage() {
  const blogs = await getBlogs()
  const sidePanelItems: BlogSidePanelItem[] = blogs.slice(0, 5).map((blog) => ({
    id: blog.id,
    isAds: false,
    blog,
  }))

  return (
    <div className="flex flex-col lg:flex-row gap-5 mt-15">
      <div className="flex-1 flex flex-col basis-2/3">
        <SectionTitle title="Блоги" className="mb-5" />
        <div className="mt-6">
          <ScrollBlogsList blogs={blogs} />
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
  )
}
