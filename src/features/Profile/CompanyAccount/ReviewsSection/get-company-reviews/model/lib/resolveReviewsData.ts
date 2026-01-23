import type { CompanyReview } from "@/entities/Profile/Company/model/types/company.types"
import type { CompanyReviewsResponse } from "../types/reviews.types"

export const resolveReviewsData = (
    data?: CompanyReviewsResponse | CompanyReview[]
): { reviews: CompanyReview[]; total: number } => {
    const reviews = Array.isArray(data) ? data : data?.reviews ?? []
    const total = Array.isArray(data) ? data.length : data?.total ?? reviews.length

    return { reviews, total }
}
