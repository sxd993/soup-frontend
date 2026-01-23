"use client"

import { useQuery } from "@tanstack/react-query"
import { getCompanyReviewReply } from "../../api/getCompanyReviewReply"

export const useCompanyReviewCompanyResponse = (reviewId?: string | number | null) => {
  return useQuery({
    queryKey: ["company-review-reply", reviewId],
    queryFn: () => {
      if (reviewId === undefined || reviewId === null) {
        return Promise.resolve(null)
      }
      return getCompanyReviewReply(reviewId)
    },
    enabled: reviewId !== undefined && reviewId !== null,
  })
}
