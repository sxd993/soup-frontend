import { AxiosClient } from "@/shared/api"

export type UpdateCompanyBlogPayload = {
  imageUrl?: string
  title?: string
  description?: string
  contentBlocks?: unknown[]
}

export const updateCompanyBlog = async (
  blogId: string,
  payload: UpdateCompanyBlogPayload,
) => {
  const response = await AxiosClient.patch(`/profile/company/blog/${blogId}`, payload)
  return response.data
}