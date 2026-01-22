"use client"

import { CompanyReviewsHeader } from "./CompanyReviewsHeader"
import { CompanyReviewsFilter } from "./CompanyReviewsFilter"
import { CompanyReviews } from "./CompanyReviews"

export const CompanyReviewsSection = () => {
    return (
        <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
                <CompanyReviewsHeader />
                <CompanyReviewsFilter />
            </div>
            <CompanyReviews />
        </section>
    )
}
