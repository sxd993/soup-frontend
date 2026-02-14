"use client";

import {
  OrderTabs,
  OrderList,
} from "@/features/Profile/ClientAccount/OrderSection";
import { SectionTitle, ViewAllButton } from "@/shared/ui";

export const ClientOrdersSection = () => {
  return (
    <section className="flex flex-col gap-12 min-h-screen">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-7">
          <SectionTitle
            className="font-semibold text-[28px]! leading-[110%]!"
            title="Заказы"
          />
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="self-end lg:order-1 lg:self-auto">
            <OrderTabs />
          </div>
          <ViewAllButton
            href="/profile/client/orders/new"
            text="Новый заказ"
            className="w-auto! text-sm! py-2! md:text-base! lg:order-2"
          />
        </div>
      </div>
      <OrderList />
    </section>
  );
};
