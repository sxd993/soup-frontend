"use client"

import { ReviewsCard } from "@/entities/Profile/Company/ui/ReviewsCard"
import { CompanyReviewsEmpty } from "@/features/Profile/CompanyAccount/ReviewsSection/get-company-reviews/ui/CompanyReviewsEmpty"
import { CompanyReviewsFilter } from "@/features/Profile/CompanyAccount/ReviewsSection/filter-company-reviews/ui/CompanyReviewsFilter"
import { CompanyReviewsHeader } from "./CompanyReviewsHeader"
import { ReviewsPaginationControls } from "@/features/Profile/CompanyAccount/ReviewsSection/reviews-pagination/ui/ReviewsPaginationControls"
import { useCompanyReviewsList } from "@/features/Profile/CompanyAccount/ReviewsSection/reviews-pagination/model/hooks/useCompanyReviewsList"
import { CompanyReviewsSkeleton } from "@/features/Profile/CompanyAccount/ReviewsSection/get-company-reviews/ui/CompanyReviewsSkeleton"
import { StateProvider } from "@/app/providers/State/StateProvider"

export const CompanyReviewsSection = () => {
    const { reviews, isLoading, isError, totalReviews, pagination } = useCompanyReviewsList(4)

    return (
        <section className="flex flex-col gap-[25px] min-h-screen">
            <div className="flex flex-row justify-between items-end">
                <CompanyReviewsHeader />
                <CompanyReviewsFilter />
            </div>

            <StateProvider
                isLoading={isLoading}
                isError={isError}
                isEmpty={totalReviews === 0}
                loadingMessage="Загружаем отзывы..."
                errorMessage="Не удалось загрузить отзывы"
                emptyComponent={<CompanyReviewsEmpty />}
                loadingComponent={<CompanyReviewsSkeleton />}
            >
                <div className="flex flex-col gap-6">
                    {reviews.map((review) => (
                        <ReviewsCard key={review.id} review={review} />
                    ))}
                </div>
            </StateProvider>
            {!isLoading && !isError && totalReviews > 0 && (
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
