import { Heart, MockLogo } from "@/shared/ui"
import { formatDate } from "@/shared/lib"
import type { Blog } from "@/entities/Blogs"

type CompanyBlogSectionProps = {
  blogs: Blog[]
  isLoading?: boolean
  isError?: boolean
}

export const CompanyBlogSection = ({ blogs, isLoading, isError }: CompanyBlogSectionProps) => {
  if (isLoading) {
    return (
      <div className="rounded-[26px] bg-white p-5">
        <h3 className="text-lg font-semibold text-secondary">Блог</h3>
        <p className="mt-3 text-sm text-accent-quinary">Загружаем публикации...</p>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="rounded-[26px] bg-white p-5">
        <h3 className="text-lg font-semibold text-secondary">Блог</h3>
        <p className="mt-3 text-sm text-red-500">Не удалось загрузить публикации</p>
      </div>
    )
  }

  if (blogs.length === 0) {
    return (
      <div className="rounded-[26px] bg-white p-5">
        <h3 className="text-lg font-semibold text-secondary">Блог</h3>
        <p className="mt-3 text-sm text-accent-quinary">Записей пока нет</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      {blogs.map((blog) => (
        <article key={blog.id} className="rounded-[26px] bg-white p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#F6F3EE]">
              {blog.company?.logo_url ? (
                <img
                  src={blog.company.logo_url}
                  alt={blog.company?.name ?? ""}
                  className="h-full w-full rounded-[10px] object-cover"
                />
              ) : (
                <MockLogo className="h-6 w-6" />
              )}
            </div>
            <div>
              <p className="text-sm font-semibold text-secondary">{blog.company?.name ?? ""}</p>
              <p className="text-xs text-accent-quinary">{formatDate(blog.createdAt)}</p>
            </div>
          </div>

          {blog.imageUrl ? (
            <div className="mt-4 overflow-hidden rounded-[20px]">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="h-[160px] w-full object-cover md:h-[200px] lg:h-[220px]"
              />
            </div>
          ) : null}

          <h3 className="mt-4 text-lg font-semibold text-secondary">{blog.title}</h3>
          <p
            className="mt-2 text-sm text-secondary leading-[150%]"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 5,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {blog.description}
          </p>

          <div className="mt-3 flex items-center gap-2 text-sm text-secondary">
            <Heart />
          </div>
        </article>
      ))}
    </div>
  )
}
