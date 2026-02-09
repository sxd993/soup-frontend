"use client"

import Link from "next/link"
import Image from "next/image"
import { useBottomBlogCard } from "../model/hooks/useBottomBlogCard"
import type { Blog } from "../model/types/blogs.types"

type BottomBlogCardProps = {
  blog: Blog
  href?: string
  className?: string
  imageHeight?: number | null
  headerActions?: React.ReactNode
}

export const BottomBlogCard = ({
  blog,
  href,
  className,
  imageHeight = 144,
  headerActions,
}: BottomBlogCardProps) => {
  const { date, articleClasses, imageHeight: height } = useBottomBlogCard(blog, {
    className,
    imageHeight,
  })

  return (
    <article className={`group ${articleClasses}`}>
      <div className="flex items-center justify-between">
        {blog.company ? (
          <Link href={`/catalog/company?id=${blog.companyId}`} className="flex items-center gap-2">
            {blog.company?.logo_url && (
              <img src={blog.company.logo_url} alt="" className="w-10 h-10 rounded-[10px] object-cover" />
            )}
            <div className="flex flex-col justify-between">
              <h4 className="font-semibold text-base text-secondary">{blog.company?.name}</h4>
              <span className="text-sm text-accent-quinary">{date}</span>
            </div>
          </Link>
        ) : (
          <div className="flex items-center gap-2">
            <div className="flex flex-col justify-between">
              <span className="text-sm text-accent-quinary">{date}</span>
            </div>
          </div>
        )}
        {headerActions}
      </div>

      {href ? (
        <Link href={href} className="block">
          {blog.imageUrl && (
            <div
              className={`overflow-hidden ${height !== null ? "h-[144px] rounded-[20px]" : "rounded-xl"}`}
            >
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                width={387}
                height={height ?? 144}
                className={`w-full ${height === null ? "h-auto object-contain" : "h-full object-cover"}`}
              />
            </div>
          )}
        </Link>
      ) : (
        blog.imageUrl && (
          <div
            className={`overflow-hidden ${height !== null ? "h-[144px] rounded-[20px]" : "rounded-xl"}`}
          >
            <Image
              src={blog.imageUrl}
              alt={blog.title}
              width={387}
              height={height ?? 144}
              className={`w-full ${height === null ? "h-auto object-contain" : "h-full object-cover"}`}
            />
          </div>
        )
      )}

      {href ? (
        <Link href={href} className="block">
          <h3 className="text-[22px] font-bold text-secondary leading-[105%]">{blog.title}</h3>
          <p className="text-[16px] font-semibold leading-[140%] text-secondary">{blog.description}</p>
        </Link>
      ) : (
        <>
          <h3 className="text-[22px] font-bold text-secondary leading-[105%]">{blog.title}</h3>
          <p className="text-[16px] font-semibold leading-[140%] text-secondary">{blog.description}</p>
        </>
      )}

      {href && (
        <div className="flex justify-end">
          <Link
            href={href}
            className="transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          >
            <button
              type="button"
              className="inline-flex items-center justify-center text-accent-senary font-semibold bg-primary hover:bg-accent transition-all duration-300 text-base px-5 py-1 rounded-[50px] cursor-pointer"
            >
              Читать
            </button>
          </Link>
        </div>
      )}
    </article>
  )
}