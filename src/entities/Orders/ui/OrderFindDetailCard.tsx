import { Button } from "@/shared/ui";
import {
  formatOrderCreatedLabel,
  formatOrderPrice,
  formatOrderResponsesCount,
} from "@/shared/lib/order";
import { getOrderIcon } from "@/shared/lib/order";
import type { Order } from "@/entities/Orders";

type OrderFindDetailCardProps = {
  order: Order;
  responsesCount?: number;
  isResponded?: boolean;
  onRespond?: () => void;
  isRespondPending?: boolean;
};

export function OrderFindDetailCard({
  order,
  responsesCount,
  isResponded = false,
  onRespond,
  isRespondPending = false,
}: OrderFindDetailCardProps) {
  const IconComponent = getOrderIcon(order.category);
  const displayedResponsesCount = responsesCount ?? order.responsesCount ?? 0;
  const priceText = formatOrderPrice(order.price);
  const createdLabel = formatOrderCreatedLabel(order.createdAt);
  const responsesLabel = formatOrderResponsesCount(displayedResponsesCount);
  const respondLabel = isRespondPending ? "Отправка..." : "Откликнуться";

  return (
    <article className="rounded-[20px] bg-white p-4 sm:px-5 sm:pb-5 sm:pt-4">

      {/* Мобильная версия карточки */}
      <div className="sm:hidden">
        <div className="flex items-center gap-3">
          <div className="flex shrink-0 items-center justify-center self-start [&_svg]:h-[48px] [&_svg]:w-[48px] [&_svg]:shrink-0 [&_svg_circle]:hidden! [&_svg_path]:fill-transparent [&_svg_path]:stroke-primary">
            <IconComponent />
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="line-clamp-2 text-[24px] font-semibold leading-[120%] text-secondary">
              {order.title}
            </h1>
            <p className="mt-1 text-[13px] font-normal leading-[130%] text-accent-septenary">
              {order.region}
            </p>
          </div>
          <p className="text-[24px] font-semibold leading-[110%] text-secondary">
            {priceText}
          </p>
        </div>
        <div className="flex justify-between mt-5 flex-wrap gap-x-3 gap-y-1 text-[13px] leading-[130%] text-accent-septenary">
          <p>{createdLabel}</p>
          <p>{responsesLabel}</p>
        </div>

        {isResponded ? (
          <p className="mt-4 text-[15px] font-semibold leading-[130%] text-primary">
            Вы откликнулись
          </p>
        ) : (
          <Button className="mt-4 w-full font-medium!" onClick={onRespond} disabled={isRespondPending}>
            {respondLabel}
          </Button>
        )}
      </div>

      {/* Десктопная версия карточки */}
      <div className="hidden sm:flex sm:items-start sm:gap-4">
        <div className="flex shrink-0 items-center justify-center self-start [&_svg]:h-[48px] [&_svg]:w-[48px] [&_svg_circle]:hidden! [&_svg_path]:fill-transparent [&_svg_path]:stroke-primary">
          <IconComponent />
        </div>

        <div className="grid min-h-0 min-w-0 flex-1 grid-cols-[1fr_auto] items-start gap-x-4 gap-y-1">
          <div className="min-w-0 flex flex-col justify-between gap-1">
            <h1 className="line-clamp-2 text-[22px] font-semibold leading-tight text-secondary">
              {order.title}
            </h1>
            <p className="text-[14px] font-normal leading-[130%] text-accent-septenary">
              {order.region}
            </p>
            {isResponded ? (
              <p className="mt-4 text-[16px] font-semibold leading-[130%] text-primary">
                Вы откликнулись
              </p>
            ) : (
              <Button
                className="max-w-1/2 flex justify-center mt-4 font-medium!"
                onClick={onRespond}
                disabled={isRespondPending}
              >
                {respondLabel}
              </Button>
            )}
          </div>

          <div className="flex h-full flex-col items-end justify-between">
            <p className="text-right text-[28px] font-semibold leading-[110%] text-secondary">
              {priceText}
            </p>
            <p className="text-right text-[14px] font-normal leading-[130%] text-accent-septenary">
              {createdLabel}
            </p>
            <p className="text-right text-[14px] leading-[130%] text-accent-septenary">
              {responsesLabel}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
