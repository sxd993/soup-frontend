"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { StarIcon } from "@/shared/ui"
import { ClientPagination } from "@/features/Pagination"
import { useSession } from "@/entities/Session"
import { ReviewsCard } from "@/entities/Profile/Company"
import { useCompanyPublicReviews } from "../../model/hooks/useCompanyPublicReviews"
import { WriteReviewForm } from "../WriteReviewForm"

const EMPTY_STAR = "#EEEBE6"
const REVIEWS_PER_PAGE = 5
const REVIEWS_PAGE_PARAM = "reviewsPage"

type CompanyReviewsSectionProps = {
  companyId: string
}

export const CompanyReviewsSection = ({ companyId }: CompanyReviewsSectionProps) => {
  const searchParams = useSearchParams()
  const { data: session } = useSession()
  const currentUserId = session?.user?.id ?? null
  const isClient = session?.user?.role === "client"

  const { reviews, isLoading, isError, hasOwnReview, refetch } = useCompanyPublicReviews(
    companyId,
    currentUserId,
  )

  const totalPages = Math.max(1, Math.ceil(reviews.length / REVIEWS_PER_PAGE))
  const rawPage = Number(searchParams?.get(REVIEWS_PAGE_PARAM) ?? 1)
  const currentPage = Number.isFinite(rawPage)
    ? Math.min(Math.max(rawPage, 1), totalPages)
    : 1
  const paginatedReviews = reviews.slice(
    (currentPage - 1) * REVIEWS_PER_PAGE,
    currentPage * REVIEWS_PER_PAGE,
  )

  const showForm = isClient && !hasOwnReview
  const noReviews = !isLoading && !isError && reviews.length === 0

  return (
    <div className="flex min-w-0 flex-col gap-6">
      {/* Блок «Напишите отзыв первым!» — только когда отзывов ещё нет, самый верхний */}
      {noReviews && (
        <div className="rounded-[26px] border border-[#E5E0D6] bg-white px-5 py-8 text-center md:py-10">
          <h4 className="text-xl font-bold text-secondary">Напишите отзыв первым!</h4>
          <p className="mx-auto mt-2 max-w-md text-sm leading-[140%] text-accent-quinary">
            Оцените этого подрядчика. Ваш отзыв поможет другим пользователям принять решение
          </p>
          <div className="mt-5 flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <StarIcon key={i} color={EMPTY_STAR} width={33} height={33} className="shrink-0" />
            ))}
          </div>
        </div>
      )}

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
      ) : reviews.length > 0 ? (
        <div className="flex flex-col gap-4">
          {paginatedReviews.map((review) => (
            <ReviewsCard key={String(review.id)} review={review} canReply={false} />
          ))}
          {totalPages > 1 && (
            <ClientPagination
              currentPage={currentPage}
              totalPages={totalPages}
              pageParam={REVIEWS_PAGE_PARAM}
            />
          )}
        </div>
      ) : null}
    </div>
  )
}
