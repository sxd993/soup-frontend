import { API_BASE_URL } from "@/shared/api"
import type { Blog } from "../types/blogs.types"

// Список опубликованных блогов (порядок с бэка: закреплённый, затем по дате)
export async function getBlogs(): Promise<Blog[]> {
  const res = await fetch(`${API_BASE_URL}/blogs`)
  return res.json()
}

// Один блог по id
export async function getBlogById(id: string): Promise<Blog | null> {
  const res = await fetch(`${API_BASE_URL}/blogs/${id}`)
  return res.json()
}