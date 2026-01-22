import type { CompanyReview } from "../model/types/company.types"

const formatDate = (value?: string | null) => {
  if (!value) return null
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return null
  return date.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

const formatRating = (value?: number | string | null) => {
  if (value === null || value === undefined || value === "") return "—"
  if (typeof value === "number") return value.toFixed(1)
  const parsed = Number(value)
  return Number.isNaN(parsed) ? "—" : parsed.toFixed(1)
}

export const ReviewsCard = ({ review }: { review: CompanyReview }) => {
  const createdAt = formatDate(review.createdAt)
  const rating = formatRating(review.rating)

  return (
    <article className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-semibold text-secondary">
            {review.authorName || "Анонимный пользователь"}
          </h3>
          {review.serviceName && (
            <span className="text-sm text-accent-quinary">{review.serviceName}</span>
          )}
        </div>
        <div className="flex flex-row items-center gap-2 text-sm text-accent-quinary md:flex-col md:items-end md:gap-1">
          <span className="text-primary font-semibold">{rating}</span>
          {createdAt && <span>{createdAt}</span>}
        </div>
      </div>

      <p className="mt-4 text-sm leading-[150%] text-secondary">
        {review.comment || "Без текста отзыва"}
      </p>

      <div className="mt-6 flex justify-end">
        <button
          type="button"
          className="rounded-full border border-[#E5E0D6] px-4 py-2 text-sm font-semibold text-secondary"
        >
          Ответить
        </button>
      </div>
    </article>
  )
}
