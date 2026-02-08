"use client"

import { useMemo } from "react"
import { StateProvider } from "@/app/providers/State/StateProvider"
import { ReviewsCard } from "@/entities/Profile/Company/ui/ReviewsCard"
import { useReviews } from "../model/hooks/useReviews"
import { resolveReviewsData } from "../model/lib/resolveReviewsData"
import { CompanyReviewsEmpty } from "./CompanyReviewsEmpty"
import { CompanyReviewsSkeleton } from "./CompanyReviewsSkeleton"
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

    return (
        <StateProvider
            isLoading={isLoading}
            isError={isError}
            isEmpty={sortedReviews.length === 0}
            loadingMessage="Загружаем отзывы..."
            errorMessage="Не удалось загрузить отзывы"
            emptyComponent={<CompanyReviewsEmpty />}
            loadingComponent={<CompanyReviewsSkeleton />}
        >
            <div className="flex flex-col gap-6">
                {sortedReviews.map((review) => (
                    <ReviewsCard key={review.id} review={review} />
                ))}
            </div>
        </StateProvider>
    )
}
