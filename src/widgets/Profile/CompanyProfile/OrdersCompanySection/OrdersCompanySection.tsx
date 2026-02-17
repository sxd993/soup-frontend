"use client";

import { CompanyOrderList, CompanyOrderTabs } from "@/features/Profile/CompanyAccount/OrderSection";
import { SectionTitle } from "@/shared/ui";

type OrdersCompanySectionProps = {
  currentPage: number;
};

export const OrdersCompanySection = ({
  currentPage,
}: OrdersCompanySectionProps) => {
  return (
    <section className="flex flex-col gap-12 min-h-screen">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-7">
          <SectionTitle
            className="font-semibold text-[28px]! leading-[110%]!"
            title="Отклики"
          />
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="self-end lg:order-1 lg:self-auto">
            <CompanyOrderTabs />
          </div>
        </div>
      </div>
      <CompanyOrderList currentPage={currentPage} />
    </section>
  );
};
