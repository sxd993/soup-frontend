import { AxiosClient } from "@/shared/api"

export const publishCompanyBlog = async (blogId: string) => {
  const response = await AxiosClient.post(`/profile/company/blog/${blogId}/publish`)
  return response.data
}