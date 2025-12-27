import { BLOGS, TopBlogCard, BottomBlogCard } from "@/entities"
import { getPriorityBlog } from "@/entities/Blogs/model/useBlogCardBig"
import { SectionTitle, ViewAllButton } from "@/shared"

export const BlogsSection = () => {
    const { item: topBlog } = getPriorityBlog();
    const topBlogId = topBlog?.id
    const bottomBlogsMd = BLOGS.filter(blog => blog.id !== topBlogId).slice(0, 2);
    const bottomBlogsLg = BLOGS.filter(blog => blog.id !== topBlogId).slice(0, 3);

    return (
        <section className="mb-15">
            {/* Хедер */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-25 mb-10">
                <SectionTitle title="Интересное в блогах" />
                <div className="hidden md:block">
                    <ViewAllButton href="/blogs" text="Все блоги" />
                </div>
            </div>

            {/* Топ карточка */}
            <TopBlogCard />

            {/* Нижние карточки */}
            <div className="mt-8 space-y-8">
                <div className="lg:hidden grid gap-5 grid-cols-1 md:grid-cols-2">
                    {bottomBlogsMd.map((blog) => (
                        <BottomBlogCard 
                            key={blog.id} 
                            blog={blog}
                            href={`/blogs/${blog.id}`}
                        />
                    ))}
                </div>
                <div className="hidden lg:grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {bottomBlogsLg.map((blog) => (
                        <BottomBlogCard 
                            key={blog.id} 
                            blog={blog}
                            href={`/blogs/${blog.id}`}
                        />
                    ))}
                </div>
            </div>

            {/* Кнопка */}
            <div className="mt-6 md:hidden">
                <ViewAllButton href="/blogs" text="Все блоги" />
            </div>
        </section>
    )
}