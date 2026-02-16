import { AxiosClient } from "@/shared/api"

export const pinByCompanyBlog = async (blogId: string) => {
  const response = await AxiosClient.post(`/profile/company/blog/${blogId}/pin-by-company`)
  return response.data
}
