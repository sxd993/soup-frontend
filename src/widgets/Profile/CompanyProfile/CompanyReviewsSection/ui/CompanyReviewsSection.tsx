"use client"

import { useMemo } from "react"
import { ReviewsCard } from "@/entities/Profile/Company/ui/ReviewsCard"
import { CompanyReviewsEmpty } from "@/features/Profile/CompanyAccount/ReviewsSection/get-company-reviews/ui/CompanyReviewsEmpty"
import { useReviews } from "@/features/Profile/CompanyAccount/ReviewsSection/get-company-reviews/model/hooks/useReviews"
import { resolveReviewsData } from "@/features/Profile/CompanyAccount/ReviewsSection/get-company-reviews/model/lib/resolveReviewsData"
import { sortReviews } from "@/features/Profile/CompanyAccount/ReviewsSection/get-company-reviews/model/lib/sortReviews"
import { CompanyReviewsFilter } from "@/features/Profile/CompanyAccount/ReviewsSection/filter-company-reviews/ui/CompanyReviewsFilter"
import { useCompanyReviewsFilterStore } from "@/features/Profile/CompanyAccount/ReviewsSection/filter-company-reviews/model/store/useCompanyReviewsFilterStore"
import { CompanyReviewsHeader } from "./CompanyReviewsHeader"
import { ReviewsPaginationControls } from "@/features/Profile/CompanyAccount/ReviewsSection/reviews-pagination/ui/ReviewsPaginationControls"
import { useReviewsPagination } from "@/features/Profile/CompanyAccount/ReviewsSection/reviews-pagination/model/hooks/useReviewsPagination"
import { ErrorState, LoadingState } from "@/shared/ui"

export const CompanyReviewsSection = () => {
    const selectedSortId = useCompanyReviewsFilterStore((state) => state.selectedSortId)
    const { data, isLoading, isError } = useReviews()
    const { reviews } = resolveReviewsData(data)
    const pageSize = 4

    const sortedReviews = useMemo(
        () => sortReviews(reviews, selectedSortId),
        [reviews, selectedSortId]
    )

    const pagination = useReviewsPagination({
        totalItems: sortedReviews.length,
        pageSize,
        pageParam: "page",
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

    return (
        <section className="flex flex-col gap-[25px] min-h-screen">
            <div className="flex flex-row justify-between items-end">
                <CompanyReviewsHeader />
                <CompanyReviewsFilter />
            </div>

            {isLoading ? (
                <LoadingState className="min-h-125" message="Загружаем отзывы..." />
            ) : isError ? (
                <ErrorState className="min-h-125" message="Не удалось загрузить отзывы" />
            ) : sortedReviews.length === 0 ? (
                <CompanyReviewsEmpty />
            ) : (
                <div className="flex flex-col gap-6">
                    {pagedReviews.map((review) => (
                        <ReviewsCard key={review.id} review={review} />
                    ))}
                </div>
            )}
            {!isLoading && !isError && sortedReviews.length > 0 && (
                <ReviewsPaginationControls
                    currentPage={pagination.currentPage}
                    totalPages={pagination.totalPages}
                    onShowMore={pagination.showMore}
                    canShowMore={pagination.canShowMore}
                    onPageChange={pagination.setPage}
                />
            )}
        </section>
    )
}
