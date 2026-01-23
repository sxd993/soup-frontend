export type CompanyReviewReplyRequest = {
  reviewId: string | number
  replyText: string
}

export type CompanyReviewReplyResponse = {
  id: string | number
  reviewId: string | number
  companyId: string | number
  authorId: string
  replyText: string
  createdAt: string
}
