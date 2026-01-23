"use client"

import { create } from "zustand"


// Данный стор хранит состояние открытия формы ответа на отзыв компании
interface CompanyReviewReplyStoreState {
    openReviewId: string | number | null
    openReply: (reviewId: string | number) => void
    closeReply: () => void
}

export const useCompanyReviewReplyStore = create<CompanyReviewReplyStoreState>((set) => ({
    openReviewId: null,
    openReply: (reviewId) => set(() => ({ openReviewId: reviewId })),
    closeReply: () => set(() => ({ openReviewId: null })),
}))
