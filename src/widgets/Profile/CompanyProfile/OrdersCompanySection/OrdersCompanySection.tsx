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
    <section className="flex min-h-screen flex-col gap-8">
      <div className="flex flex-col gap-5">
        <SectionTitle
          className="text-[28px]! font-semibold! leading-[110%]!"
          title="Отклики"
        />
        <CompanyOrderTabs />
      </div>

      <CompanyOrderList currentPage={currentPage} />
    </section>
  );
};
