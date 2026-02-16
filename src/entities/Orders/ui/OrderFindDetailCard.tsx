import { Button } from "@/shared/ui";
import { formatOrderCreatedLabel, formatOrderPrice } from "@/shared/lib/order";
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

  return (
    <article className="rounded-[20px] bg-white px-5 pb-5 pt-4">
      <div className="flex items-start gap-4">
        <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center self-start [&_svg]:h-[64px] [&_svg]:w-[64px] [&_svg]:shrink-0 [&_svg_circle]:hidden! [&_svg_path]:fill-transparent [&_svg_path]:stroke-primary">
          <IconComponent />
        </div>

        <div className="grid min-h-0 min-w-0 flex-1 grid-cols-[1fr_auto] items-start gap-x-4 gap-y-1">
          <div className="min-w-0 flex flex-col justify-between gap-3">
            <h1 className="line-clamp-2 text-[22px] font-semibold leading-tight text-secondary">
              {order.title}
            </h1>
            <p className="text-[14px] font-normal leading-[130%] text-accent-septenary">
              {order.region}
            </p>
            {isResponded ? (
              <p className="mt-3 text-[16px] font-semibold leading-[130%] text-primary">
                Вы откликнулись
              </p>
            ) : (
              <Button
                className="max-w-3/7 mt-2 font-medium!"
                onClick={onRespond}
                disabled={isRespondPending}
              >
                {isRespondPending ? "Отправка..." : "Откликнуться"}
              </Button>
            )}
          </div>

          <div className="flex flex-col items-end h-full justify-between">
            <p className="text-right text-[28px] font-semibold leading-[110%] text-secondary">
              {formatOrderPrice(order.price)}
            </p>
            <p className="text-right text-[14px] font-normal leading-[130%] text-accent-septenary">
              {formatOrderCreatedLabel(order.createdAt)}
            </p>
            <p className="text-right text-[14px] leading-[130%] text-accent-septenary">
              {displayedResponsesCount} откликов
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
