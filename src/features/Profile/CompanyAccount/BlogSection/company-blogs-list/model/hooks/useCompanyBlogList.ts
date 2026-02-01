"use client"

import { useRouter } from "next/navigation"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { Blog } from "@/entities/Blogs"
import { useCompanyBlogTabsStore } from "@/features/Profile/CompanyAccount/BlogSection/company-blog-tabs"
import { useCompanyBlogs } from "./useCompanyBlogs"
import { publishCompanyBlog, deleteCompanyBlog } from "../.."
import type { CompanyBlogItem } from "../types/company-blog.types"

const BLOG_MENU_IDS = {
  publish: 1,
  edit: 2,
  delete: 3,
} as const

function toBlog(item: CompanyBlogItem): Blog {
  return {
    id: item.id,
    companyId: 0,
    title: item.title,
    description: item.description,
    imageUrl: item.imageUrl,
    contentBlocks: item.contentBlocks,
    createdAt: item.createdAt,
    status: item.type,
    isPinned: item.isPinned,
    company: { name: item.companyName, logo_url: item.companyLogoUrl },
  }
}

function getMenuItems(item: CompanyBlogItem): { id: number; title: string }[] {
  const items: { id: number; title: string }[] = []
  if (item.type === "draft") {
    items.push({ id: BLOG_MENU_IDS.publish, title: "Опубликовать" })
    items.push({ id: BLOG_MENU_IDS.edit, title: "Редактировать" })
  }
  items.push({ id: BLOG_MENU_IDS.delete, title: "Удалить" })
  return items
}

export type CompanyBlogListCardProps = {
  blog: Blog
  href: string | undefined
  menuItems: { id: number; title: string }[]
  onMenuSelect: (id: number) => void
}

export function useCompanyBlogList() {
  const router = useRouter()
  const queryClient = useQueryClient()
  const selectedStatus = useCompanyBlogTabsStore((state) => state.selectedStatus)
  const { data: blogs = [], isLoading, isError } = useCompanyBlogs(selectedStatus)

  const publishMutation = useMutation({
    mutationFn: (blogId: string) => publishCompanyBlog(blogId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["company-blogs"] })
    },
  })

  const deleteMutation = useMutation({
    mutationFn: (blogId: string) => deleteCompanyBlog(blogId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["company-blogs"] })
    },
  })

  const isEmpty = !isLoading && !isError && blogs.length === 0

  const handleMenuSelect = (item: CompanyBlogItem) => (id: number) => {
    if (id === BLOG_MENU_IDS.publish) {
      publishMutation.mutate(item.id)
    } else if (id === BLOG_MENU_IDS.edit) {
      router.push(`/profile/company/blog/${item.id}/edit`)
    } else if (id === BLOG_MENU_IDS.delete) {
      deleteMutation.mutate(item.id)
    }
  }

  const cards: CompanyBlogListCardProps[] = blogs.map((item) => ({
    blog: toBlog(item),
    href: item.type === "published" ? `/blogs/${item.id}` : undefined,
    menuItems: getMenuItems(item),
    onMenuSelect: handleMenuSelect(item),
  }))

  return {
    isLoading,
    isError,
    isEmpty,
    cards,
  }
}