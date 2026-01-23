"use client"

import { useMemo } from "react"
import { ErrorState, LoadingState } from "@/shared/ui"
import { ReviewsCard } from "@/entities/Profile/Company/ui/ReviewsCard"
import { useReviews } from "../model/hooks/useReviews"
import { resolveReviewsData } from "../model/lib/resolveReviewsData"
import { CompanyReviewsEmpty } from "./CompanyReviewsEmpty"
import { sortReviews } from "../model/lib/sortReviews"
import { useCompanyReviewsFilterStore } from "@/features/Profile/CompanyAccount/ReviewsSection"

export const CompanyReviews = () => {
    const selectedSortId = useCompanyReviewsFilterStore((state) => state.selectedSortId)
    const { data, isLoading, isError } = useReviews()
    const { reviews } = resolveReviewsData(data)

    const sortedReviews = useMemo(
        () => sortReviews(reviews, selectedSortId),
        [reviews, selectedSortId]
    )

    if (isLoading) {
        return <LoadingState className="min-h-125" message="Загружаем отзывы..." />
    }

    if (isError) {
        return <ErrorState className="min-h-125" message="Не удалось загрузить отзывы" />
    }

    if (sortedReviews.length === 0) {
        return <CompanyReviewsEmpty />
    }

    return (
        <div className="flex flex-col gap-6">
            {sortedReviews.map((review) => (
                <ReviewsCard key={review.id} review={review} />
            ))}
        </div>
    )
}
