"use client"

import Link from "next/link"
import Image from "next/image"
import { DetailsIcon } from "@/shared/ui"
import { FilterMenu } from "@/shared/ui/FilterMenu/ui/FilterMenu"
import { useDropdown } from "@/shared/hooks"
import { useBottomBlogCard } from "../model/hooks/useBottomBlogCard"
import type { Blog } from "../model/types/blogs.types"

export type BlogMenuActionId = 1 | 2 | 3

type BottomBlogCardProps = {
  blog: Blog
  href?: string
  className?: string
  imageHeight?: number | null
  menuItems?: { id: number; title: string }[]
  onMenuSelect?: (id: number) => void
}

export const BottomBlogCard = ({
  blog,
  href,
  className,
  imageHeight = 144,
  menuItems,
  onMenuSelect,
}: BottomBlogCardProps) => {
  const { date, articleClasses, imageHeight: height, showMenu, menuItems: items } = useBottomBlogCard(
    blog,
    { className, imageHeight, menuItems }
  )
  const dropdown = useDropdown()

  const handleMenuSelect = (id: number) => {
    onMenuSelect?.(id)
    dropdown.close()
  }

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
        {showMenu && (
          <div className="relative" ref={dropdown.ref}>
            <button
              type="button"
              onClick={dropdown.toggle}
              className="p-1 rounded-full hover:bg-[#F5F5F5] transition-colors cursor-pointer"
              aria-expanded={dropdown.isOpen}
              aria-haspopup="true"
            >
              <DetailsIcon />
            </button>
            {dropdown.isOpen && (
              <FilterMenu items={items} className="w-35!" onSelect={handleMenuSelect} />
            )}
          </div>
        )}
      </div>

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

      <h3 className="text-[22px] font-bold text-secondary leading-[105%]">{blog.title}</h3>
      <p className="text-[16px] font-semibold leading-[140%] text-secondary">{blog.description}</p>

      {href && (
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
      )}
    </article>
  )
}