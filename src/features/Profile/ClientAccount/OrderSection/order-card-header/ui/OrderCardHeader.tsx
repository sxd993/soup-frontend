"use client";

import type { ComponentType } from "react";

type OrderCardHeaderProps = {
  Icon: ComponentType<{ isActive?: boolean }>;
  title: string;
  region: string;
  priceText: string;
  createdLabel: string;
  titleAs?: "h1" | "h3";
  className?: string;
};

export const OrderCardHeader = ({
  Icon,
  title,
  region,
  priceText,
  createdLabel,
  titleAs: TitleTag = "h1",
  className = "",
}: OrderCardHeaderProps) => (
  <div className={className}>
    <div className="flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <div className="flex min-w-0 flex-1 gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-primary/10 text-primary">
            <Icon />
          </div>
          <TitleTag className="min-w-0 flex-1 font-bold text-[22px] leading-[1.15] text-secondary">
            {title}
          </TitleTag>
        </div>
        <p className="shrink-0 pl-4 text-right text-[28px] font-semibold leading-[1.1] text-secondary">
          {priceText}
        </p>
      </div>
      <div className="flex items-center justify-between pl-14">
        <p className="text-[14px] font-normal leading-[1.3] text-accent-septenary">
          {region}
        </p>
        <p className="text-[14px] font-normal leading-[1.3] text-accent-septenary">
          {createdLabel}
        </p>
      </div>
    </div>
  </div>
);
