import { AxiosClient } from "@/shared/api"
import type { CompanyBlogItem, CompanyBlogStatus } from "../model/types/company-blog.types"

export const getCompanyBlogs = async (status: CompanyBlogStatus): Promise<CompanyBlogItem[]> => {
  const response = await AxiosClient.get<CompanyBlogItem[]>("/profile/company/blog", {
    params: { status },
  })
  return response.data
}