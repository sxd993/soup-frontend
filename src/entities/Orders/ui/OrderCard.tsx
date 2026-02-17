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
  "flex gap-3 rounded-[20px] bg-white px-4 pb-4 pt-3 min-h-[100px] md:gap-4 md:px-5 md:pb-5 md:pt-4 md:min-h-[116px]";

export function OrderCard({ order, href }: OrderCardProps) {
  const IconComponent = getOrderIcon(order.category);
  const defaultHref = `/order/find/${order.id}`;
  const linkHref = href === undefined ? defaultHref : href;

  const content = (
    <article
      className={`${cardContentClassName} ${linkHref != null ? "cursor-pointer" : ""}`}
    >
      <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center self-center [&_svg]:h-[40px] [&_svg]:w-[40px] [&_svg]:shrink-0 [&_svg_circle]:hidden! [&_svg_path]:fill-transparent [&_svg_path]:stroke-primary md:h-[50px] md:w-[50px] [&_svg]:md:h-[50px] [&_svg]:md:w-[50px]">
        <IconComponent />
      </div>
      <div className="grid min-h-0 min-w-0 flex-1 grid-cols-[1fr_auto] grid-rows-[1fr_auto] items-start gap-x-3 gap-y-1 md:gap-x-4">
        <h3 className="text-[18px] font-semibold leading-tight text-secondary line-clamp-2 md:text-[22px]">
          {order.title}
        </h3>
        <h2 className="text-right text-[20px] font-semibold leading-[110%] tracking-normal text-secondary md:text-[28px]">
          {formatOrderPrice(order.price)}
        </h2>
        <p className="text-[12px] font-normal leading-[130%] text-accent-septenary md:text-[14px]">
          {order.region}
        </p>
        <p className="text-right text-[12px] font-normal leading-[130%] text-accent-septenary md:text-[14px]">
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
