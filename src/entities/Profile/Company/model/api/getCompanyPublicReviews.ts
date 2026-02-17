import { AxiosClient } from "@/shared/api"
import type { CompanyReview } from "../types/company.types"

export type CompanyPublicReviewsResponse = {
  reviews: CompanyReview[]
  total?: number
}

export const getCompanyPublicReviews = async (
  companyId: string,
): Promise<CompanyPublicReviewsResponse> => {
  const response = await AxiosClient.get<CompanyPublicReviewsResponse | CompanyReview[]>(
    `/companies/${companyId}/reviews`,
  )
  const data = response.data
  if (Array.isArray(data)) {
    return { reviews: data, total: data.length }
  }
  return {
    reviews: data.reviews ?? [],
    total: data.total ?? 0,
  }
}
