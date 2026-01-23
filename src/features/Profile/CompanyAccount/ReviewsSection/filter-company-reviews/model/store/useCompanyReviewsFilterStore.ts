"use client"

import { create } from "zustand"
import { REVIEW_SORT_OPTIONS, type ReviewSortId } from "../const/reviewSortOptions"

interface CompanyReviewsFilterStoreState {
    isOpen: boolean
    selectedSortId: ReviewSortId
    setOpen: (value: boolean) => void
    toggleOpen: () => void
    setSelectedSort: (value: ReviewSortId) => void
}

export const useCompanyReviewsFilterStore = create<CompanyReviewsFilterStoreState>((set) => ({
    isOpen: false,
    selectedSortId: REVIEW_SORT_OPTIONS[0]?.id ?? "newest",
    setOpen: (value) => set(() => ({ isOpen: value })),
    toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
    setSelectedSort: (value) => set(() => ({ selectedSortId: value })),
}))
