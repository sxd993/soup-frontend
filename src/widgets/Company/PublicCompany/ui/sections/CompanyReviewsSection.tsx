"use client"

import Link from "next/link"
import { useSession } from "@/entities/Session"
import { ReviewsCard } from "@/entities/Profile/Company"
import { useCompanyPublicReviews } from "../../model/hooks/useCompanyPublicReviews"
import { WriteReviewForm } from "../WriteReviewForm"

type CompanyReviewsSectionProps = {
  companyId: string
  title?: string
}

export const CompanyReviewsSection = ({ companyId, title = "Отзывы" }: CompanyReviewsSectionProps) => {
  const { data: session } = useSession()
  const currentUserId = session?.user?.id ?? null
  const isClient = session?.user?.role === "client"

  const { reviews, isLoading, isError, hasOwnReview, refetch } = useCompanyPublicReviews(
    companyId,
    currentUserId,
  )

  const showForm = isClient && !hasOwnReview

  return (
    <div className="flex min-w-0 flex-col gap-6">
      <h3 className="text-lg font-semibold text-secondary">{title}</h3>

      {/* Неавторизованный пользователь */}
      {!session && (
        <div className="rounded-[26px] bg-white px-5 py-4 text-center text-sm text-secondary">
          Войдите, чтобы оставить отзыв.{" "}
          <Link href="/auth/login" className="font-semibold text-primary underline hover:no-underline">
            Войти
          </Link>
        </div>
      )}

      {/* Форма написания отзыва (только для клиента, который ещё не оставил отзыв) */}
      {showForm && (
        <WriteReviewForm
          companyId={companyId}
          clientUserId={currentUserId!}
          onSuccess={() => refetch()}
        />
      )}

      {/* Список отзывов */}
      {isLoading ? (
        <div className="flex flex-col gap-4">
          {[1, 2].map((i) => (
            <div key={i} className="h-32 animate-pulse rounded-[20px] bg-[#E5E0D6]" />
          ))}
        </div>
      ) : isError ? (
        <p className="text-sm text-accent-quinary">Не удалось загрузить отзывы</p>
      ) : reviews.length === 0 ? (
        <p className="text-sm text-accent-quinary">Пока нет отзывов</p>
      ) : (
        <div className="flex flex-col gap-4">
          {reviews.map((review) => (
            <ReviewsCard key={String(review.id)} review={review} canReply={false} />
          ))}
        </div>
      )}
    </div>
  )
}
