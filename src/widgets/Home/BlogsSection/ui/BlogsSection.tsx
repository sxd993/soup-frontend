import { BLOGS, BlogCard, TopBlogCardSection } from "@/entities"
import { SectionTitle, ViewAllButton } from "@/shared/ui/icons"

export const BlogsSection = () => {

    const firstBlog = BLOGS[0];
    const otherBlogs = BLOGS.slice(1);
    const mobileBlogs = BLOGS.slice(0, 3);
    const smBlogs = BLOGS.slice(1, 3);

    return (
        <section className="mb-15">
            {/* Шапка секции*/}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-25 mb-10">
                <SectionTitle title="Интересное в блогах" />
                <div className="hidden md:block">
                    <ViewAllButton href="/contests" text="Все блоги" />
                </div>
            </div>
            {/* Основной контент секции*/}
            <div>
                {/* Mobile: просто 3 карточки в одну колонку */}
                <div className="grid grid-cols-1 gap-5 md:hidden">
                    {mobileBlogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>

                {/* md: TopBlog + 2 карточки снизу */}
                <div className="hidden md:block lg:hidden">
                    <TopBlogCardSection firstBlog={firstBlog} />
                    <div className="grid grid-cols-2 content-between mt-8 w-full h-full gap-5">
                        {smBlogs.map((blog) => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))}
                    </div>
                </div>

                {/* MD+: TopBlog + 3 карточки снизу */}
                <div className="hidden lg:block">
                    <TopBlogCardSection firstBlog={firstBlog} />
                    <div className="grid grid-cols-3 content-between mt-8 w-full h-full gap-5">
                        {otherBlogs.map((blog) => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-6 md:hidden">
                <ViewAllButton href="/contests" text="Все блоги" />
            </div>
        </section>
    )
}
