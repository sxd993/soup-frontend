"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { postCompanyReviewReply } from "../../api/postCompanyReviewReply"
import type { CompanyReviewReplyRequest } from "../types/reply.types"

export const useCompanyReviewReplyMutation = (reviewId?: string | number) => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationKey: ["company-review-reply"],
    mutationFn: (payload: CompanyReviewReplyRequest) => postCompanyReviewReply(payload),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["company-reviews"] })
      queryClient.invalidateQueries({ queryKey: ["company-review-reply", variables.reviewId] })
    },
  })

  const submitReply = async (replyText: string) => {
    const trimmed = replyText.trim()
    if (!trimmed || mutation.isPending || reviewId === undefined || reviewId === null) {
      return false
    }
    await mutation.mutateAsync({ reviewId, replyText: trimmed })
    return true
  }

  return { ...mutation, submitReply }
}
