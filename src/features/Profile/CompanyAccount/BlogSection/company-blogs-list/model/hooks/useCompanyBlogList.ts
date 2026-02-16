"use client"

import { useRouter } from "next/navigation"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { showSuccessToast, showErrorToast } from "@/shared/ui/State/toast"
import { getErrorMessage } from "@/shared/lib"
import type { Blog } from "@/entities/Blogs"
import { useCompanyBlogTabsStore } from "@/features/Profile/CompanyAccount/BlogSection/company-blog-tabs"
import { useCompanyBlogs } from "./useCompanyBlogs"
import { publishCompanyBlog, deleteCompanyBlog, pinByCompanyBlog, unpinByCompanyBlog } from "../.."
import type { CompanyBlogItem } from "../types/company-blog.types"

const BLOG_MENU_IDS = {
  publish: 1,
  edit: 2,
  pin: 3,
  unpin: 4,
  delete: 5,
} as const

function toBlog(item: CompanyBlogItem): Blog {
  return {
    id: item.id,
    companyId: item.companyId,
    title: item.title,
    description: item.description,
    imageUrl: item.imageUrl,
    contentBlocks: item.contentBlocks,
    createdAt: item.createdAt,
    status: item.type,
    isPinned: item.isPinned,
    pinnedByCompany: item.pinnedByCompany,
    company: { name: item.companyName, logo_url: item.companyLogoUrl },
    likesCount: item.likesCount,
  }
}

function getMenuItems(item: CompanyBlogItem): { id: number; title: string }[] {
  const items: { id: number; title: string }[] = []
  if (item.type === "draft") {
    items.push({ id: BLOG_MENU_IDS.publish, title: "Опубликовать" })
    items.push({ id: BLOG_MENU_IDS.edit, title: "Редактировать" })
  } else if (item.type === "moderation") {
    // На модерации нельзя редактировать
  } else if (item.type === "published") {
    if (item.pinnedByCompany) {
      items.push({ id: BLOG_MENU_IDS.unpin, title: "Открепить" })
    } else {
      items.push({ id: BLOG_MENU_IDS.pin, title: "Закрепить" })
    }
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
      showSuccessToast("Блог отправлен на модерацию", "Ваш блог успешно отправлен на модерацию.")
    },
    onError: (error) => {
      showErrorToast(
        "Не удалось отправить блог на модерацию",
        getErrorMessage(error, "Попробуйте ещё раз.")
      )
    },
  })

  const deleteMutation = useMutation({
    mutationFn: (blogId: string) => deleteCompanyBlog(blogId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["company-blogs"] })
      showSuccessToast("Блог удален", "Блог успешно удален.")
    },
    onError: (error) => {
      showErrorToast(
        "Не удалось удалить блог",
        getErrorMessage(error, "Попробуйте ещё раз.")
      )
    },
  })

  const pinByCompanyMutation = useMutation({
    mutationFn: (blogId: string) => pinByCompanyBlog(blogId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["company-blogs"] })
      showSuccessToast("Блог закреплен", "Блог успешно закреплен.")
    },
    onError: (error) => {
      showErrorToast(
        "Не удалось закрепить блог",
        getErrorMessage(error, "Попробуйте ещё раз.")
      )
    },
  })

  const unpinByCompanyMutation = useMutation({
    mutationFn: (blogId: string) => unpinByCompanyBlog(blogId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["company-blogs"] })
      showSuccessToast("Блог откреплен", "Блог успешно откреплен.")
    },
    onError: (error) => {
      showErrorToast(
        "Не удалось открепить блог",
        getErrorMessage(error, "Попробуйте ещё раз.")
      )
    },
  })

  const isEmpty = !isLoading && !isError && blogs.length === 0

  const handleMenuSelect = (item: CompanyBlogItem) => (id: number) => {
    if (id === BLOG_MENU_IDS.publish) {
      publishMutation.mutate(item.id)
    } else if (id === BLOG_MENU_IDS.edit) {
      router.push(`/profile/company/blog/edit?id=${item.id}`)
    } else if (id === BLOG_MENU_IDS.pin) {
      pinByCompanyMutation.mutate(item.id)
    } else if (id === BLOG_MENU_IDS.unpin) {
      unpinByCompanyMutation.mutate(item.id)
    } else if (id === BLOG_MENU_IDS.delete) {
      deleteMutation.mutate(item.id)
    }
  }

  const cards: CompanyBlogListCardProps[] = blogs.map((item) => ({
    blog: toBlog(item),
    href: item.type === "published" ? `/blogs/item?id=${item.id}` : undefined,
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
