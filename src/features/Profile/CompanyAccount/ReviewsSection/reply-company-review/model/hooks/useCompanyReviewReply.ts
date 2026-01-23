"use client"

import { useState } from "react"
import type { CompanyReview } from "@/entities/Profile/Company/model/types/company.types"
import { formatDate } from "@/entities/Profile/Company/model/lib/company.entities.helpers"
import { useCompanyReviewReplyStore } from "../store/useCompanyReviewReplyStore"
import { useCompanyReviewCompanyResponse } from "./useCompanyReviewCompanyResponse"
import { useCompanyReviewReplyMutation } from "./useCompanyReviewReplyMutation"

export const useCompanyReviewReply = (review: CompanyReview) => {
  const { openReviewId, openReply, closeReply } = useCompanyReviewReplyStore()
  const [replyDraft, setReplyDraft] = useState("")

  const createdAt = formatDate(review.createdAt)

  const rating = Number(review.rating)
  const ratingValue = Number.isFinite(rating) ? rating : 0

  const replyMutation = useCompanyReviewReplyMutation(review.id)
  const { data: replyData } = useCompanyReviewCompanyResponse(review.id)

  const isReplyOpen = openReviewId === review.id

  // единая "нормализация" ответа компании
  const reply = replyData ?? review.reply ?? null
  const replyText = reply?.replyText ?? null
  const replyDateLabel = formatDate(reply?.createdAt)

  const submitReply = async () => {
    if (replyMutation.isPending) return false

    try {
      const isSubmitted = await replyMutation.submitReply(replyDraft)

      if (!isSubmitted) return false

      setReplyDraft("")
      closeReply()
      return true
    } catch {
      return false
    }
  }

  return {
    createdAt,
    ratingValue,
    replyDraft,
    setReplyDraft,
    isReplyOpen,
    openReply,
    closeReply,
    replyText,
    replyDateLabel,
    submitReply,
    isSubmitting: replyMutation.isPending,
  }
}
