import { useQuery } from "@tanstack/react-query"
import { getCompanyPublicReviews } from "@/entities/Profile/Company/model/api/getCompanyPublicReviews"
import { sortPublicReviews } from "../lib/sortPublicReviews"

export function useCompanyPublicReviews(companyId: string, currentUserId: string | null | undefined) {
  const query = useQuery({
    queryKey: ["company-public-reviews", companyId],
    queryFn: () => getCompanyPublicReviews(companyId),
    enabled: Boolean(companyId),
    staleTime: 2 * 60 * 1000,
  })

  const reviews = query.data?.reviews ?? []
  const sortedReviews = sortPublicReviews(reviews, currentUserId)
  const hasOwnReview = Boolean(
    currentUserId && reviews.some((r) => String(r.authorId) === String(currentUserId)),
  )

  return {
    reviews: sortedReviews,
    total: query.data?.total ?? 0,
    isLoading: query.isLoading,
    isError: query.isError,
    refetch: query.refetch,
    hasOwnReview,
  }
}
