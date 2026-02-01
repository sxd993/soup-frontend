import { AxiosClient } from "@/shared/api"
import type { CompanyBlogItem } from "../model/types/company-blog.types"

export const getCompanyBlog = async (blogId: string): Promise<CompanyBlogItem> => {
  const response = await AxiosClient.get<CompanyBlogItem>(`/profile/company/blog/${blogId}`)
  return response.data
}