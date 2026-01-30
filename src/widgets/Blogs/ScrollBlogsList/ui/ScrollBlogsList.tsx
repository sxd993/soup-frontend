import { BottomBlogCard } from "@/entities/Blogs"
import type { Blog } from "@/entities/Blogs"

// Список блогов на странице /blogs
type ScrollBlogsListProps = {
  blogs: Blog[]
}

export const ScrollBlogsList = ({ blogs }: ScrollBlogsListProps) => (
  <div className="w-full flex flex-col gap-5">
    {blogs.map((blog) => (
      <div key={blog.id} className="bg-white p-5 rounded-[20px]">
        <BottomBlogCard
          blog={blog}
          href={`/blogs/${blog.id}`}
          imageHeight={null}
        />
      </div>
    ))}
  </div>
)
