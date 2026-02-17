import type { CompanyReview } from "@/entities/Profile/Company/model/types/company.types"

function getTimeValue(value?: string | null): number {
  if (!value) return 0
  const time = new Date(value).getTime()
  return Number.isNaN(time) ? 0 : time
}

/**
 * Свой отзыв первым, остальные по дате (сверху самые новые).
 */
export function sortPublicReviews(
  reviews: CompanyReview[],
  currentUserId: string | null | undefined,
): CompanyReview[] {
  if (!reviews.length) return []
  if (!currentUserId) {
    return [...reviews].sort((a, b) => getTimeValue(b.createdAt) - getTimeValue(a.createdAt))
  }
  const own: CompanyReview[] = []
  const rest: CompanyReview[] = []
  for (const r of reviews) {
    if (String(r.authorId) === String(currentUserId)) {
      own.push(r)
    } else {
      rest.push(r)
    }
  }
  rest.sort((a, b) => getTimeValue(b.createdAt) - getTimeValue(a.createdAt))
  return [...own, ...rest]
}
