"use client"

import { CompanyReviewsFilter } from "@/features/Profile/CompanyAccount/ReviewsSection/filter-company-reviews/ui/CompanyReviewsFilter"
import { CompanyReviewsHeader } from "./CompanyReviewsHeader"
import { CompanyReviews } from "@/features/Profile/CompanyAccount/ReviewsSection/get-company-reviews/ui/CompanyReviews"

export const CompanyReviewsSection = () => {
    return (
        <section className="flex flex-col gap-[25px] min-h-screen">
            <div className="flex flex-row justify-between items-end">
                <CompanyReviewsHeader />
                <CompanyReviewsFilter />
            </div>
            <CompanyReviews />
        </section>
    )
}
