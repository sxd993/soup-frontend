import Link from "next/link"
import Image from "next/image"
import { Heart, Comment } from "@/shared/ui"
import { formatDate } from "@/shared/lib"
import type { Blog } from "../model/types/blogs.types"

// Большая карточка блога
type TopBlogCardProps = {
  blog: Blog
  href: string
  className?: string
}

export const TopBlogCard = ({ blog, href, className }: TopBlogCardProps) => {
  const date = formatDate(blog.createdAt)

  return (
    <div className={`group flex flex-col lg:flex-row gap-5 items-center md:items-stretch ${className}`}>
      {blog.imageUrl && (
        <div className="w-full flex justify-center md:w-auto overflow-hidden rounded-[40px]">
          <Image
            width={797}
            height={500}
            src={blog.imageUrl}
            alt={blog.title}
            className="max-w-full h-auto"
          />
        </div>
      )}
      <article className="flex-1 rounded-2xl flex flex-col justify-start gap-4">
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
        </div>

        <h3 className="text-[22px] font-bold text-secondary leading-[105%]">{blog.title}</h3>
        <p className="text-base text-secondary-quinary">{blog.description}</p>

        <div className="flex items-center justify-between text-sm text-accent-quinary">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 cursor-pointer"><Heart /> 0</span>
            <span className="flex items-center gap-1 cursor-pointer"><Comment /> 0</span>
          </div>
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
        </div>
      </article>
    </div>
  )
}
