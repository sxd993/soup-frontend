import { AxiosClient } from "@/shared/api"
import type { Blog } from "../types/blogs.types"

export const getCompanyBlogs = async (companyId: string): Promise<Blog[]> => {
  try {
    const response = await AxiosClient.get<Blog[]>("/blogs", {
      params: { companyId },
    })
    return Array.isArray(response.data) ? response.data : []
  } catch {
    return []
  }
}
