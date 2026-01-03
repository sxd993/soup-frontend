import { ScrollBlogsList } from "@/widgets/Blogs";
import { BLOGS, getPriorityBlog, type BlogItem } from "@/entities/Blogs";
import { SectionTitle, AdsBanner, SidePanel, BlogSidePanelCard, type SidePanelItem } from "@/shared/ui";

type BlogSidePanelItem = SidePanelItem & {
    blog: BlogItem
}

export default function BlogsPage() {
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

                {/*  Список блогов */}
                <div className="mt-6">
                    <ScrollBlogsList />
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
