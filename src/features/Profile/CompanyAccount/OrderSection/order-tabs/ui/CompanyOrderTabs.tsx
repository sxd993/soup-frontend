"use client";

import type { CompanyOrderTabStatus } from "../model/const/orderTabs";
import { useCompanyOrderTabs } from "../model/hooks/useCompanyOrderTabs";

export const CompanyOrderTabs = () => {
  const { items, selectedStatus, handleSelect } = useCompanyOrderTabs();

  return (
    <div className="inline-flex flex-wrap rounded-[40px]">
      {items.map((item) => {
        const isActive = item.id === selectedStatus;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => handleSelect(item.id as CompanyOrderTabStatus)}
            className={`rounded-[40px] px-6 py-2 text-[16px] font-semibold transition-colors ${
              isActive ? "bg-white text-secondary" : "text-accent-septenary"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};
