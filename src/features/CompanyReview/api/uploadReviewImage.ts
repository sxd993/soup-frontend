import { AxiosClient } from "@/shared/api"

/**
 * Загрузка фото к отзыву.
 * Бэкенд сохраняет в хранилище: .../reviews/{companyId}/{reviewId}/ и возвращает URL.
 */
export const uploadReviewImage = async (
  companyId: string,
  reviewId: string | number,
  file: File,
): Promise<{ url: string }> => {
  const formData = new FormData()
  formData.append("image", file)
  const response = await AxiosClient.post<{ url: string }>(
    `/companies/${companyId}/reviews/${reviewId}/upload-image`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    },
  )
  return response.data
}
