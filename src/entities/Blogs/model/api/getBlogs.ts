import { API_BASE_URL } from "@/shared/api"
import { ISR_REVALIDATE_SECONDS } from "@/shared/config/isr"
import type { Blog } from "../types/blogs.types"

export async function getBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/blogs`, {
      next: { revalidate: ISR_REVALIDATE_SECONDS },
    })
    if (!res.ok) return []

    const data: unknown = await res.json()
    return Array.isArray(data) ? (data as Blog[]) : []
  } catch {
    return []
  }
}

export async function getBlogById(id: string): Promise<Blog | null> {
  const res = await fetch(`${API_BASE_URL}/blogs/${id}`, {
    next: { revalidate: ISR_REVALIDATE_SECONDS },
  })
  if (!res.ok) return null
  return res.json()
}

export async function getTopLikedBlogs(limit: number = 5): Promise<Blog[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/blogs/top/liked?limit=${limit}`, {
      next: { revalidate: ISR_REVALIDATE_SECONDS },
    })
    if (!res.ok) return []

    const data: unknown = await res.json()
    return Array.isArray(data) ? (data as Blog[]) : []
  } catch {
    return []
  }
}
