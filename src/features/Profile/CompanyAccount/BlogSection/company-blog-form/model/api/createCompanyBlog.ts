import { AxiosClient } from "@/shared/api"
import type { CreateBlogPayload } from "../types/create-blog.types"

export const createCompanyBlog = async (payload: CreateBlogPayload) => {
  const response = await AxiosClient.post("/profile/company/blog", payload)
  return response.data
}