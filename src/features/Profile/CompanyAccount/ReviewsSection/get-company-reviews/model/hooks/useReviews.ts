import { useQuery } from "@tanstack/react-query"
import { getCompanyReviews } from "../../api/getCompanyReviews"

export const useReviews = () => {
    return useQuery({
        queryKey: ["company-reviews"],
        queryFn: getCompanyReviews,
        staleTime: 60 * 1000,
    })
}
