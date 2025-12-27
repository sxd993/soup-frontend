import type { Metadata } from "next";
import { ScrollBlogsList } from "@/widgets/Blogs";
import { BLOGS, BottomBlogCard } from "@/entities";
import { getPriorityBlog } from "@/entities/Blogs/model/useBlogCardBig";
import { SectionTitle, SidePanel, AdsBanner } from "@/shared";

export const metadata: Metadata = {
    title: "Блоги",
    description: "Студия уникальных проектов",
};

export default function BlogsPage() {
    const { item: topBlogItem } = getPriorityBlog()
    const topBlogId = topBlogItem?.id
    const relatedBlogs = BLOGS.filter((blog) => blog.id !== topBlogId)

    return (
        <div className="flex flex-col lg:flex-row gap-5 mt-20">
            <div className="flex-1 flex flex-col basis-2/3">
                <SectionTitle title="Блоги" className="mb-5" />
                <div className="mt-6">
                    <ScrollBlogsList />
                </div>
            </div>
            <div className="basis-1/3 flex flex-col gap-6 lg:mt-20">
                {/* Рекламный баннер */}
                <div className="w-full">
                    <AdsBanner hasDescription={true} />
                </div>
                
                {/* Самое обсуждаемое */}
                <SidePanel
                    items={relatedBlogs.map((blog) => ({
                        id: String(blog.id),
                        image: blog.image || '',
                        imageAlt: blog.title,
                        title: blog.title,
                        isAds: blog.isAds || false,
                        description: blog.description,
                    }))}
                    title="Самое обсуждаемое"
                    getHref={(item) => `/blogs/${item.id}`}
                    renderItem={(item) => {
                        const blog = relatedBlogs.find(b => String(b.id) === item.id)
                        if (!blog) return null
                        return <BottomBlogCard blog={blog} href={`/blogs/${blog.id}`} />
                    }}
                />
            </div>
        </div>
    )
}