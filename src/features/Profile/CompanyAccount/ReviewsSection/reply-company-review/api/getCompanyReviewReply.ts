import { AxiosClient } from "@/shared/api"
import type { CompanyReviewReplyResponse } from "../model/types/reply.types"

export const getCompanyReviewReply = async (reviewId: string | number) => {
  const response = await AxiosClient.get<CompanyReviewReplyResponse | null>(
    `/profile/company/review-reply/${reviewId}`
  )

  return response.data
}
