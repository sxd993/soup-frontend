"use client"

import { useMemo } from "react"
import { useReviews } from "@/features/Profile/CompanyAccount/ReviewsSection/get-company-reviews/model/hooks/useReviews"
import { resolveReviewsData } from "@/features/Profile/CompanyAccount/ReviewsSection/get-company-reviews/model/lib/resolveReviewsData"
import { sortReviews } from "@/features/Profile/CompanyAccount/ReviewsSection/get-company-reviews/model/lib/sortReviews"
import { useCompanyReviewsFilterStore } from "@/features/Profile/CompanyAccount/ReviewsSection/filter-company-reviews/model/store/useCompanyReviewsFilterStore"
import { useReviewsPagination } from "./useReviewsPagination"

export const useCompanyReviewsList = (pageSize = 4, currentPageFromServer = 1) => {
  const selectedSortId = useCompanyReviewsFilterStore((state) => state.selectedSortId)
  const { data, isLoading, isError } = useReviews()
  const { reviews } = resolveReviewsData(data)

  const sortedReviews = useMemo(
    () => sortReviews(reviews, selectedSortId),
    [reviews, selectedSortId]
  )

  const pagination = useReviewsPagination({
    totalItems: sortedReviews.length,
    pageSize,
    pageParam: "page",
    currentPageFromServer,
  })

  const pagedReviews = useMemo(() => {
    if (pagination.isExpanded) {
      return sortedReviews.slice(0, pagination.expandedEndIndex)
    }
    return sortedReviews.slice(pagination.startIndex, pagination.endIndex)
  }, [
    pagination.endIndex,
    pagination.expandedEndIndex,
    pagination.isExpanded,
    pagination.startIndex,
    sortedReviews,
  ])

  return {
    isLoading,
    isError,
    reviews: pagedReviews,
    totalReviews: sortedReviews.length,
    pagination,
  }
}
