import type { CompanyReview } from "@/entities/Profile/Company/model/types/company.types"

export type CompanyReviewsResponse = {
    total: number
    reviews: CompanyReview[]
}
