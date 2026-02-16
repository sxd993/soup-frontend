import { AxiosClient } from "@/shared/api"

export const unpinByCompanyBlog = async (blogId: string) => {
  const response = await AxiosClient.post(`/profile/company/blog/${blogId}/unpin-by-company`)
  return response.data
}
