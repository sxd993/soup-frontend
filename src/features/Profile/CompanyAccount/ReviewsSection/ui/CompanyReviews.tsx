"use client"

import { useMemo } from "react"
import { ErrorState, LoadingState } from "@/shared/ui"
import type { CompanyReview } from "@/entities/Profile/Company/model/types/company.types"
import { ReviewsCard } from "@/entities/Profile/Company/ui/ReviewsCard"
import { useCompanyReviewsFilterStore } from "../model/store/useCompanyReviewsFilterStore"
import { useReviews } from "../model/hooks/useReviews"
import { resolveReviewsData } from "../model/lib/resolveReviewsData"
import { CompanyReviewsEmpty } from "./CompanyReviewsEmpty"

const getTimeValue = (value?: string | null) => {
    if (!value) return 0
    const time = new Date(value).getTime()
    return Number.isNaN(time) ? 0 : time
}

const getRatingValue = (value?: number | string | null) => {
    if (value === null || value === undefined) return 0
    if (typeof value === "number") return value
    const parsed = Number(value)
    return Number.isNaN(parsed) ? 0 : parsed
}

const sortReviews = (reviews: CompanyReview[], sortId: string) => {
    const sorted = [...reviews]

    switch (sortId) {
        case "oldest":
            return sorted.sort((a, b) => getTimeValue(a.createdAt) - getTimeValue(b.createdAt))
        case "lowest-rating":
            return sorted.sort((a, b) => getRatingValue(a.rating) - getRatingValue(b.rating))
        case "highest-rating":
            return sorted.sort((a, b) => getRatingValue(b.rating) - getRatingValue(a.rating))
        case "newest":
        default:
            return sorted.sort((a, b) => getTimeValue(b.createdAt) - getTimeValue(a.createdAt))
    }
}

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
