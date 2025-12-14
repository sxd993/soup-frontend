import { BLOGS, BlogCard, TopBlogCardSection } from "@/entities"
import { SectionTitle, ViewAllButton } from "@/shared/ui/icons"

export const BlogsSection = () => {

    const firstBlog = BLOGS[0];
    const otherBlogs = BLOGS.slice(1);

    return (
        <section className="mb-15">
            {/* Шапка секции*/}
            <div className="flex items-center justify-between mt-25 mb-10">
                <SectionTitle title="Интересное в блогах" />
                <ViewAllButton href="/contests" text="Все блоги" />
            </div>
            {/* Основной контент секции*/}
            <div>
                {/* Верхние статьи*/}
                <TopBlogCardSection firstBlog={firstBlog} />
                {/* Нижние статьи*/}
                <div className="grid grid-cols-3 content-between mt-8 w-full h-full gap-5">
                    {otherBlogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
        </section>
    )
}
