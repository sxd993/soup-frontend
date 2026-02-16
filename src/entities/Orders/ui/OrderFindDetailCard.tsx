import { Button } from "@/shared/ui";
import { ICONS_BY_LABEL } from "@/shared/config/catalogServiceIcons";
import { formatOrderCreatedLabel, formatOrderPrice } from "@/shared/lib/order";
import type { Order } from "@/entities/Orders";

type OrderFindDetailCardProps = {
  order: Order;
  responsesCount?: number;
};

export function OrderFindDetailCard({
  order,
  responsesCount = 0,
}: OrderFindDetailCardProps) {
  const IconComponent = order.category ? ICONS_BY_LABEL[order.category] : null;

  return (
    <article className="rounded-[20px] bg-white px-5 pb-5 pt-4">
      <div className="flex items-start gap-4">
        <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center self-start [&_svg]:h-[64px] [&_svg]:w-[64px] [&_svg]:shrink-0 [&_svg_circle]:hidden! [&_svg_path]:fill-transparent [&_svg_path]:stroke-primary">
          {IconComponent ? (
            <IconComponent />
          ) : (
            <span className="text-2xl font-semibold text-primary">
              {order.category?.[0] ?? "?"}
            </span>
          )}
        </div>

        <div className="grid min-h-0 min-w-0 flex-1 grid-cols-[1fr_auto] items-start gap-x-4 gap-y-1">
          <div className="min-w-0 flex flex-col justify-between gap-3">
            <h1 className="line-clamp-2 text-[22px] font-semibold leading-tight text-secondary">
              {order.title}
            </h1>
            <p className="text-[14px] font-normal leading-[130%] text-accent-septenary">
              {order.region}
            </p>
            <Button className="max-w-3/7 mt-2 font-medium!">Откликнуться</Button>
          </div>

          <div className="flex flex-col items-end h-full justify-between">
            <p className="text-right text-[28px] font-semibold leading-[110%] text-secondary">
              {formatOrderPrice(order.price)}
            </p>
            <p className="text-right text-[14px] font-normal leading-[130%] text-accent-septenary">
              {formatOrderCreatedLabel(order.createdAt)}
            </p>
            <p className="text-right text-[14px] leading-[130%] text-accent-septenary">
              {responsesCount} откликов
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
