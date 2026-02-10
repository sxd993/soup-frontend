"use client"

import type { CompanyReview } from "../model/types/company.types"
import { CompanyReviewReplyForm } from "@/features/Profile/CompanyAccount/ReviewsSection/reply-company-review/ui/CompanyReviewReplyForm"
import { CompanyReviewReplyText } from "@/features/Profile/CompanyAccount/ReviewsSection/reply-company-review/ui/CompanyReviewReplyText"
import { useCompanyReviewReply } from "@/features/Profile/CompanyAccount/ReviewsSection/reply-company-review/model/hooks/useCompanyReviewReply"

const StarIcon = ({ fill }: { fill: string }) => {
  return (
    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.05676 0.69121C5.35611 -0.230101 6.65952 -0.2301 6.95887 0.691211L7.69167 2.94653C7.82554 3.35856 8.2095 3.63752 8.64272 3.63752L11.0141 3.63752C11.9828 3.63752 12.3856 4.87713 11.6019 5.44653L9.6834 6.8404C9.33292 7.09504 9.18626 7.54641 9.32013 7.95843L10.0529 10.2138C10.3523 11.1351 9.2978 11.9012 8.51409 11.3318L6.5956 9.93792C6.24511 9.68328 5.77051 9.68328 5.42003 9.93792L3.50154 11.3318C2.71782 11.9012 1.66334 11.1351 1.96269 10.2138L2.69549 7.95843C2.82937 7.54641 2.68271 7.09504 2.33222 6.8404L0.413729 5.44653C-0.369984 4.87713 0.0327914 3.63752 1.00151 3.63752L3.3729 3.63752C3.80613 3.63752 4.19008 3.35856 4.32396 2.94653L5.05676 0.69121Z" fill={fill} />
    </svg>
  )
}

export const ReviewsCard = ({ review }: { review: CompanyReview }) => {

  const {
    replyDraft,
    setReplyDraft,
    isReplyOpen,
    openReply,
    replyText,
    replyDateLabel,
    submitReply,
    isSubmitting,
    ratingValue,
    createdAt
  } = useCompanyReviewReply(review)

  return (
    <article className="rounded-[20px] bg-white px-4 py-3 md:p-5">
      <div className="flex flex-col gap-4 md:flex-row md:gap-6">
        <div className="mt-1 flex flex-row items-start justify-between gap-3 md:mt-0 md:flex-col md:items-start md:justify-start md:gap-[13px] md:w-32">
          {/* Рейтинг (звезды) */}
          <div className="flex items-center gap-1 text-[#7BB34A] shrink-0">
            {Array.from({ length: 5 }).map((_, index) => {
              const isActive = ratingValue >= index + 1
              return (
                <span key={index} aria-hidden="true">
                  <StarIcon fill={isActive ? "#8BC652" : "#C5C2C2"} />
                </span>
              )
            })}
          </div>
          {/* Дата отзыва */}
          <span className="text-[12px] font-normal leading-[130%] text-accent-septenary md:text-[14px]">
            {createdAt || "—"}
          </span>
        </div>

        <div className="flex flex-1 -mt-0.5 flex-col gap-2 items-start md:gap-1.75">
          {/* Имя автора */}
          <h3 className="text-[18px] font-bold leading-[120%] text-secondary md:text-[22px] md:leading-[115%]">
            {review.authorName || "Анонимный пользователь"}
          </h3>
          {/* Название услуги/заказа */}
          {review.serviceName && (
            <span className="text-[12px] font-normal leading-[130%] text-accent-septenary md:text-[14px]">
              {review.serviceName}
            </span>
          )}

          {/* Текст отзыва */}
          <p className="text-[14px] font-medium leading-[140%] text-secondary md:text-[16px]">
            {review.comment || "Без текста отзыва"}
          </p>

          {!isReplyOpen && !replyText && (
            <button
              type="button"
              className="mt-4 text-sm font-semibold text-primary md:mt-6 md:text-base"
              onClick={() => openReply(review.id)}
            >
              Ответить
            </button>
          )}
        </div>
      </div>

      {/* Если есть ответ от компании, то рендерим его */}
      {replyText ? (
        <div className="flex justify-end">
          <CompanyReviewReplyText replyText={replyText} replyDateLabel={replyDateLabel} />
        </div>

      ) : (
        <>
          {/* Если нет ответа от компании и нажата кнопка Ответить, то открывается меню для написания ответа компании */}
          {isReplyOpen && (
            <CompanyReviewReplyForm
              replyDraft={replyDraft}
              isSubmitting={isSubmitting}
              onChange={setReplyDraft}
              onSubmit={submitReply}
            />
          )}
        </>
      )}
    </article>
  )
}
