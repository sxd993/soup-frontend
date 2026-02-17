import { AxiosClient } from "@/shared/api"
import type { CompanyReview } from "@/entities/Profile/Company/model/types/company.types"

export type CreateCompanyReviewPayload = {
  rating: number
  comment: string
}

export const createCompanyReview = async (
  companyId: string,
  payload: CreateCompanyReviewPayload,
): Promise<CompanyReview> => {
  const response = await AxiosClient.post<CompanyReview>(
    `/companies/${companyId}/reviews`,
    payload,
  )
  return response.data
}
