import { StateProvider } from "@/app/providers/State/StateProvider"
import { BottomBlogCard, type Blog } from "@/entities/Blogs"

type CompanyBlogSectionProps = {
  blogs: Blog[]
  isLoading?: boolean
  isError?: boolean
}

export const CompanyBlogSection = ({ blogs, isLoading, isError }: CompanyBlogSectionProps) => {
  return (
    <StateProvider
      isLoading={isLoading}
      isError={isError}
      isEmpty={blogs.length === 0}
      loadingMessage="Загружаем публикации..."
      errorMessage="Не удалось загрузить публикации"
      emptyMessage="Записей пока нет"
    >
      <div className="flex flex-col gap-4">
        {blogs.map((blog) => (
          <BottomBlogCard
            key={blog.id}
            blog={blog}
            imageHeight={144}
            className="rounded-[26px] bg-white p-5"
            titleClassName="mt-0 text-lg font-semibold text-secondary"
            descriptionClassName="mt-2 text-sm text-secondary leading-[150%]"
            descriptionLineClamp={5}
            expandInline
          />
        ))}
      </div>
    </StateProvider>
  )
}
