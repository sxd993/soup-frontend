import { StateProvider } from "@/app/providers/State/StateProvider"
import type { Blog } from "@/entities/Blogs"
import { CompanyBlogPostCard } from "./CompanyBlogPostCard"

type CompanyBlogSectionProps = {
  blogs: Blog[]
  isLoading?: boolean
  isError?: boolean
}

export const CompanyBlogSection = ({ blogs, isLoading, isError }: CompanyBlogSectionProps) => {
  return (
    <StateProvider
      isLoading={isLoading ?? false}
      isError={isError ?? false}
      isEmpty={blogs.length === 0}
      errorTitle="Не удалось загрузить публикации"
    >
      <div className="flex flex-col gap-4">
        {blogs.map((blog) => (
          <CompanyBlogPostCard key={blog.id} blog={blog} />
        ))}
      </div>
    </StateProvider>
  )
}
