"use client"

import { SectionTitle } from "@/shared/ui"
import { useReviews } from "../model/hooks/useReviews"
import { resolveReviewsData } from "../model/lib/resolveReviewsData"

export const CompanyReviewsHeader = () => {
    const { data, isLoading } = useReviews()
    const { total } = resolveReviewsData(data)

    return (
        <div className="flex flex-col gap-2">
            <SectionTitle title="Отзывы" />
            <span className="text-sm text-accent-quinary">
                {isLoading ? "Загрузка..." : `Всего отзывов: ${total}`}
            </span>
        </div>
    )
}
