"use client";

import Link from "next/link";
import type { Order } from "../model/types/order.types";
import { formatOrderPrice, formatOrderCreatedLabel } from "@/shared/lib/order";
import { getOrderIcon } from "@/shared/lib/order";

type OrderCardProps = {
  order: Order;
  href?: string | null;
};

const cardContentClassName =
  "flex gap-4 rounded-[20px] bg-white px-5 pb-5 pt-4 min-h-[116px]";

export function OrderCard({ order, href }: OrderCardProps) {
  const IconComponent = getOrderIcon(order.category);
  const defaultHref = `/order/find/${order.id}`;
  const linkHref = href === undefined ? defaultHref : href;

  const content = (
    <article
      className={`${cardContentClassName} ${linkHref != null ? "cursor-pointer" : ""}`}
    >
      <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center self-center [&_svg]:h-[50px] [&_svg]:w-[50px] [&_svg]:shrink-0 [&_svg_circle]:hidden! [&_svg_path]:fill-transparent [&_svg_path]:stroke-primary">
        <IconComponent />
      </div>
      <div className="grid min-h-0 min-w-0 flex-1 grid-cols-[1fr_auto] grid-rows-[1fr_auto] items-start gap-x-4 gap-y-1">
        <h3 className="text-[22px] font-semibold leading-tight text-secondary line-clamp-2">
          {order.title}
        </h3>
        <h2 className="text-right text-[28px] font-semibold leading-[110%] tracking-normal text-secondary">
          {formatOrderPrice(order.price)}
        </h2>
        <p className="text-[14px] font-normal leading-[130%] text-accent-septenary">
          {order.region}
        </p>
        <p className="text-right text-[14px] font-normal leading-[130%] text-accent-septenary">
          {formatOrderCreatedLabel(order.createdAt)}
        </p>
      </div>
    </article>
  );

  if (linkHref != null) {
    return (
      <Link
        href={linkHref}
        className="block transition-opacity hover:opacity-90"
      >
        {content}
      </Link>
    );
  }
  return content;
}
