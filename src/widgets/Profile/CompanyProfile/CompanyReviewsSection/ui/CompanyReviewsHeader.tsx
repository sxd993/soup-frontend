"use client"

import { SectionTitle } from "@/shared/ui"
import { useReviews } from "@/features/Profile/CompanyAccount/ReviewsSection/get-company-reviews/model/hooks/useReviews"
import { resolveReviewsData } from "@/features/Profile/CompanyAccount/ReviewsSection/get-company-reviews/model/lib/resolveReviewsData"

export const CompanyReviewsHeader = () => {
    const { data, isLoading } = useReviews()
    const { total } = resolveReviewsData(data)

    return (
        <div className="flex flex-col gap-7">
            <SectionTitle
                className="font-semibold text-[28px]! leading-[110%]!"
                title="Отзывы"
            />
            <span className="text-[18px] leading-[120%] font-semibold">
                {isLoading ? "Загрузка..." : `${total} отзывов`}
            </span>
        </div>
    )
}
