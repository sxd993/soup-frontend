import { API_BASE_URL } from "@/shared/api"
import type { Blog } from "../types/blogs.types"

// Список опубликованных блогов (порядок с бэка: закреплённый, затем по дате)
export async function getBlogs(): Promise<Blog[]> {
  const res = await fetch(`${API_BASE_URL}/blogs`)
  if (!res.ok) throw new Error(`getBlogs failed: ${res.status}`)
  return res.json()
}

// Один блог по id
export async function getBlogById(id: string): Promise<Blog | null> {
  const res = await fetch(`${API_BASE_URL}/blogs/${id}`)
  if (!res.ok) return null
  return res.json()
}