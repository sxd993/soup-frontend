"use client"

import { formatDate } from "@/shared/lib"
import type { Blog } from "../types/blogs.types"

type UseBottomBlogCardOptions = {
  className?: string
  imageHeight?: number | null
  menuItems?: { id: number; title: string }[]
}

export function useBottomBlogCard(blog: Blog, options: UseBottomBlogCardOptions = {}) {
  const { className, imageHeight = 144, menuItems } = options

  const date = formatDate(blog.createdAt)
  const articleClasses = ["flex-1 rounded-2xl flex flex-col justify-start gap-4", className]
    .filter(Boolean)
    .join(" ")

  return {
    date,
    articleClasses,
    imageHeight,
    showMenu: Boolean(menuItems?.length),
    menuItems: menuItems ?? [],
  }
}