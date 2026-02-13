"use client"

import Link from "next/link"
import Image from "next/image"
import { Button, MainIcon } from "@/shared/ui"
import { useBottomBlogCard } from "../model/hooks/useBottomBlogCard"
import type { Blog } from "../model/types/blogs.types"

type BottomBlogCardProps = {
  blog: Blog
  href?: string
  className?: string
  imageHeight?: number | null
  headerActions?: React.ReactNode
  titleClassName?: string
  descriptionClassName?: string
  descriptionLineClamp?: number
}

export const BottomBlogCard = ({
  blog,
  href,
  className,
  imageHeight = 144,
  headerActions,
  titleClassName,
  descriptionClassName,
  descriptionLineClamp,
}: BottomBlogCardProps) => {
  const { date, articleClasses, imageHeight: height } = useBottomBlogCard(blog, {
    className,
    imageHeight,
  })

  const descriptionStyle =
    typeof descriptionLineClamp === "number"
      ? {
          display: "-webkit-box",
          WebkitLineClamp: descriptionLineClamp,
          WebkitBoxOrient: "vertical" as const,
          overflow: "hidden",
        }
      : undefined

  const imageBlock = blog.imageUrl ? (
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
  ) : null

  const titleAndDescription = (
    <>
      <h3
        className={titleClassName ?? "text-[22px] font-bold text-secondary leading-[105%]"}
      >
        {blog.title}
      </h3>
      <p
        className={descriptionClassName ?? "text-[16px] font-semibold leading-[140%] text-secondary"}
        style={descriptionStyle}
      >
        {blog.description}
      </p>
    </>
  )

  return (
    <article className={`group ${articleClasses}`}>
      <div className="flex items-center justify-between">
        {blog.company ? (
          <Link href={`/catalog/company?id=${blog.companyId}`} className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-[10px] bg-white">
              {blog.company.logo_url ? (
                <img
                  src={blog.company.logo_url}
                  alt={blog.company.name ?? ""}
                  className="h-full w-full object-cover"
                />
              ) : (
                <MainIcon className="h-8 w-8" />
              )}
            </div>
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
          {imageBlock}
        </Link>
      ) : (
        imageBlock
      )}

      {href ? (
        <Link href={href} className="block">
          {titleAndDescription}
        </Link>
      ) : (
        titleAndDescription
      )}

      {href ? (
        <div className="flex justify-end">
          <Link
            href={href}
            className="transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          >
            <Button type="button" className="px-5 py-1 rounded-full active:bg-[#80D62C]">
              Читать
            </Button>
          </Link>
        </div>
      ) : null}
    </article>
  )
}