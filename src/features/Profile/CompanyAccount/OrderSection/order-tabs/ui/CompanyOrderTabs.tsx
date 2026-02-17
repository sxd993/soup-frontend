"use client";

import type { CompanyOrderTabStatus } from "../model/const/orderTabs";
import { useCompanyOrderTabs } from "../model/hooks/useCompanyOrderTabs";

export const CompanyOrderTabs = () => {
  const { items, selectedStatus, handleSelect } = useCompanyOrderTabs();

  return (
    <div className="inline-flex rounded-[40px] bg-transparent">
      {items.map((item) => {
        const isActive = item.id === selectedStatus;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => handleSelect(item.id as CompanyOrderTabStatus)}
            className={`cursor-pointer rounded-[40px] px-5 py-2 text-[18px]! leading-[120%]! font-semibold! transition-colors ${
              isActive ? "bg-white! text-secondary!" : "text-accent-septenary!"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};
