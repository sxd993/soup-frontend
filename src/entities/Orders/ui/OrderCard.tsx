"use client";

import Link from "next/link";
import type { Order } from "../model/types/order.types";
import { ICONS_BY_LABEL } from "@/shared/config/catalogServiceIcons";

type OrderCardProps = {
  order: Order;
};

function formatPrice(price: number): string {
  return `${Number(price).toLocaleString("ru-RU", { useGrouping: false })} ₽`;
}

function formatCreatedAt(isoDate: string): string {
  try {
    const d = new Date(isoDate);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = String(d.getFullYear()).slice(-2);
    return `Создано ${day}.${month}.${year}`;
  } catch {
    return "";
  }
}

export function OrderCard({ order }: OrderCardProps) {
  const IconComponent = order.category ? ICONS_BY_LABEL[order.category] : null;

  return (
    <Link href={`/order/find/${order.id}`} className="block transition-opacity hover:opacity-90">
      <article
        className="flex cursor-pointer gap-4 rounded-[20px] bg-white px-5 pb-5 pt-4"
        style={{ minHeight: 116 }}
      >
      <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center self-center [&_svg]:h-[50px] [&_svg]:w-[50px] [&_svg]:shrink-0 [&_svg_circle]:!hidden [&_svg_path]:fill-transparent [&_svg_path]:stroke-[#8BC652]">
        {IconComponent ? (
          <IconComponent />
        ) : (
          <span className="text-2xl font-semibold text-primary">
            {order.category?.[0] ?? "?"}
          </span>
        )}
      </div>
      <div className="grid min-h-0 min-w-0 flex-1 grid-cols-[1fr_auto] grid-rows-[1fr_auto] items-start gap-x-4 gap-y-1">
        <h3 className="text-[22px] font-semibold leading-tight text-secondary line-clamp-2">
          {order.title}
        </h3>
        <h2 className="text-right text-[28px] font-semibold leading-[110%] tracking-normal text-secondary">
          {formatPrice(order.price)}
        </h2>
        <p className="text-sm text-[#2F2F2F]">{order.region}</p>
        <p className="text-right text-sm text-[#2F2F2F]">{formatCreatedAt(order.createdAt)}</p>
      </div>
    </article>
    </Link>
  );
}
