import Link from "next/link"
import Image from "next/image"
import { Heart, Comment, DetailsIcon } from "@/shared/ui"
import { formatDate } from "@/shared/lib"
import type { Blog } from "../model/types/blogs.types"

// Маленькая карточка блога
type BottomBlogCardProps = {
  blog: Blog
  href?: string
  className?: string
  imageHeight?: number | null
}

export const BottomBlogCard = ({ blog, href, className, imageHeight = 144 }: BottomBlogCardProps) => {
  const date = formatDate(blog.createdAt)

  const articleClasses = ["flex-1 rounded-2xl flex flex-col justify-start gap-4", className]
    .filter(Boolean)
    .join(" ")

  return (
    <article className={`group ${articleClasses}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {blog.company?.logo_url && (
            <img src={blog.company.logo_url} alt="" className="w-10 h-10 rounded-[10px] object-cover" />
          )}
          <div className="flex flex-col justify-between">
            <h4 className="font-semibold text-base text-secondary">{blog.company?.name}</h4>
            <span className="text-sm text-accent-quinary">{date}</span>
          </div>
        </div>
        <DetailsIcon />
      </div>

      {blog.imageUrl && (
        <div
          className={`overflow-hidden ${imageHeight !== null ? "h-[144px] rounded-[20px]" : "rounded-xl"}`}
        >
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            width={387}
            height={imageHeight ?? 144}
            className={`w-full ${imageHeight === null ? "h-auto object-contain" : "h-full object-cover"}`}
          />
        </div>
      )}

      <h3 className="text-[22px] font-bold text-secondary leading-[105%]">{blog.title}</h3>
      <p className="text-base text-secondary-quinary">{blog.description}</p>

      <div className="flex items-center justify-between text-sm text-accent-quinary">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 cursor-pointer"><Heart /> 0</span>
          <span className="flex items-center gap-1 cursor-pointer"><Comment /> 0</span>
        </div>
        {href && (
          <Link
            href={href}
            className="opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <button
              type="button"
              className="inline-flex items-center justify-center text-accent-senary font-semibold bg-primary hover:bg-accent transition-all duration-300 text-base px-5 py-1 rounded-[50px] cursor-pointer"
            >
              Читать
            </button>
          </Link>
        )}
      </div>
    </article>
  )
}
