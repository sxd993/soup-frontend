"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button, MainIcon } from "@/shared/ui"
import { useBottomBlogCard } from "@/entities/Blogs/model/hooks/useBottomBlogCard"
import type { Blog } from "@/entities/Blogs"

const DESCRIPTION_LINE_CLAMP = 5

type CompanyBlogPostCardProps = {
  blog: Blog
}

export const CompanyBlogPostCard = ({ blog }: CompanyBlogPostCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const { date, articleClasses, imageHeight: height } = useBottomBlogCard(blog, {
    className: "rounded-[26px] bg-white p-5",
    imageHeight: 144,
  })

  const descriptionStyle = !isExpanded
    ? {
        display: "-webkit-box",
        WebkitLineClamp: DESCRIPTION_LINE_CLAMP,
        WebkitBoxOrient: "vertical" as const,
        overflow: "hidden",
      }
    : undefined

  return (
    <article className={articleClasses}>
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
      </div>

      {blog.imageUrl ? (
        <div className="overflow-hidden h-[144px] rounded-[20px]">
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            width={387}
            height={height ?? 144}
            className="w-full h-full object-cover"
          />
        </div>
      ) : null}

      <h3 className="mt-0 text-lg font-semibold text-secondary">{blog.title}</h3>
      <p
        className="mt-2 text-sm text-secondary leading-[150%]"
        style={descriptionStyle}
      >
        {blog.description}
      </p>

      <div className="flex justify-end">
        <Button
          type="button"
          onClick={() => setIsExpanded((v) => !v)}
          className="px-5 py-1 rounded-full active:bg-[#80D62C]"
        >
          {isExpanded ? "Свернуть" : "Показать все"}
        </Button>
      </div>
    </article>
  )
}
