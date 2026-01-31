import Link from "next/link"
import Image from "next/image"
import { DetailsIcon } from "@/shared/ui"
import { formatDate } from "@/shared/lib"
import type { Blog } from "@/entities/Blogs"

// Карточка блога в сайдбаре «Самое обсуждаемое»
type BlogSidePanelCardProps = {
  item: Blog
  href: string
}

export const BlogSidePanelCard = ({ item: blog, href }: BlogSidePanelCardProps) => {
  const date = formatDate(blog.createdAt)

  return (
    <article className="group flex flex-col gap-4">
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
        <div className="relative w-full h-[144px] rounded-[20px] overflow-hidden">
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <h3 className="text-[22px] font-bold text-secondary leading-[105%]">{blog.title}</h3>
      <p className="text-[16px] font-semibold leading-[140%] text-secondary">{blog.description}</p>

      <div className="flex justify-end">
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
  )
}
