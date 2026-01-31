import { AxiosClient } from "@/shared/api"

export const deleteCompanyBlog = async (blogId: string) => {
  await AxiosClient.delete(`/profile/company/blog/${blogId}`)
}