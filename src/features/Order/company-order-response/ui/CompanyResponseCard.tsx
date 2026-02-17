import { formatOrderResponsePriceLabel } from "@/shared/lib/order";
import { formatDate } from "@/shared/lib";
import { getReviewWordByCount } from "@/shared/lib";
import { StarIcon } from "@/shared/ui";
import type { CompanyOrderResponse } from "@/entities/Orders";

type CompanyResponseCardProps = {
  response: CompanyOrderResponse;
};

export const CompanyResponseCard = ({ response }: CompanyResponseCardProps) => {
  const responseDate = formatDate(response.createdAt);
  const reviewsCount = response.reviewsCount ?? 0;
  const rating = response.rating ?? 0;

  return (
    <article className="rounded-[20px] bg-white p-5">
      <div className="flex items-center gap-3">
        {response.companyLogoUrl ? (
          <img
            src={response.companyLogoUrl}
            alt={response.companyName ?? "Логотип компании"}
            className="h-16 w-16 rounded-[12px] object-cover"
          />
        ) : (
          <div className="h-16 w-16 rounded-[12px] bg-accent-octonary" />
        )}
        <div className="flex flex-col gap-1">
          <p className="text-[22px] font-semibold leading-[115%] text-secondary">
            {response.companyName ?? "Ваша компания"}
          </p>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index}>
                  <StarIcon color={rating >= index + 1 ? "#8BC652" : "#C5C2C2"} />
                </span>
              ))}
            </span>
            <span className="text-[12px] leading-none text-accent-quinary align-middle">•</span>
            <span className="text-[14px] leading-[130%] text-accent-quinary">
              {reviewsCount} {getReviewWordByCount(reviewsCount)}
            </span>
          </div>
        </div>
      </div>

      <p className="mt-5 text-[22px] font-semibold leading-[115%] text-secondary">
        {formatOrderResponsePriceLabel(response.priceFrom, response.priceTo)}
      </p>

      <p className="mt-5 whitespace-pre-wrap text-[14px] font-normal leading-[130%] text-secondary">
        {response.message?.trim() || "Комментарий к отклику не указан"}
      </p>

      <p className="mt-5 text-[14px] font-normal leading-[130%] text-accent-septenary">
        {responseDate}
      </p>
    </article>
  );
};
