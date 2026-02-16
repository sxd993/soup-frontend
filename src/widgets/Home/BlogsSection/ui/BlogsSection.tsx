import { getBlogs, TopBlogCard, BottomBlogCard } from "@/entities/Blogs"
import { SectionTitle, ViewAllButton } from "@/shared/ui"

// Секция «Интересное в блогах» на главной странице
export const BlogsSection = async () => {
  const blogs = await getBlogs()
  const topBlog = blogs[0] // закреплённый или последний по дате
  const restBlogs = blogs.slice(1)
  const bottomBlogsMd = restBlogs.slice(0, 2) // мобилка/планшет: 2 карточки
  const bottomBlogsLg = restBlogs.slice(0, 3) // десктоп: 3 карточки

  return (
    <section className="mb-15">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-25 mb-10">
        <SectionTitle title="Интересное в блогах" />
        <div className="hidden md:block">
          <ViewAllButton href="/blogs" text="Все блоги" />
        </div>
      </div>

      {topBlog && <TopBlogCard blog={topBlog} href={`/blogs/item?id=${topBlog.id}`} showLikes={true} />}
      <div className="mt-8 space-y-8">
        <div className="lg:hidden grid gap-5 grid-cols-1 md:grid-cols-2">
          {bottomBlogsMd.map((blog) => (
            <BottomBlogCard
              key={blog.id}
              blog={blog}
              href={`/blogs/item?id=${blog.id}`}
              imageHeight={144}
              showLikes={true}
            />
          ))}
        </div>
        <div className="hidden lg:grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {bottomBlogsLg.map((blog) => (
            <BottomBlogCard
              key={blog.id}
              blog={blog}
              href={`/blogs/item?id=${blog.id}`}
              imageHeight={144}
              showLikes={true}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 md:hidden">
        <ViewAllButton href="/blogs" text="Все блоги" />
      </div>
    </section>
  )
}
