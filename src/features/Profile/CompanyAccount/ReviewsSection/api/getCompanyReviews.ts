import { AxiosClient } from "@/shared/api/AxiosClient"
import type { CompanyReview } from "@/entities/Profile/Company/model/types/company.types"
import type { CompanyReviewsResponse } from "../model/types/reviews.types"

export const getCompanyReviews = async () => {
    const response = await AxiosClient.get<CompanyReviewsResponse | CompanyReview[]>(
        "/profile/company/get-reviews"
    )

    return response.data
}
