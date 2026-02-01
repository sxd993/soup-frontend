import { AxiosClient } from "@/shared/api"

type UploadBlogImageResponse = { url: string }

export const uploadBlogImage = async (file: File): Promise<UploadBlogImageResponse> => {
  const formData = new FormData()
  formData.append("image", file)
  const response = await AxiosClient.post<UploadBlogImageResponse>(
    "profile/company/blog/upload-image",
    formData,
  )
  return response.data
}