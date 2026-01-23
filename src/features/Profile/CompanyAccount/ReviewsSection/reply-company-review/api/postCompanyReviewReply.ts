import { AxiosClient } from "@/shared/api/AxiosClient"
import type {
  CompanyReviewReplyRequest,
  CompanyReviewReplyResponse,
} from "../model/types/reply.types"

export const postCompanyReviewReply = async (payload: CompanyReviewReplyRequest) => {
  const response = await AxiosClient.post<CompanyReviewReplyResponse>(
    "/profile/company/review-reply",
    payload
  )

  return response.data
}
