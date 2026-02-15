"use client";

import type { OrderDetailTab } from "../model/hooks/useOrderDetailPage";

type OrderDetailTabsProps = {
  activeTab: OrderDetailTab;
  setActiveTab: (tab: OrderDetailTab) => void;
  responsesCount: number;
};

export const OrderDetailTabs = ({
  activeTab,
  setActiveTab,
  responsesCount,
}: OrderDetailTabsProps) => (
  <div className="flex flex-wrap justify-center gap-6 text-[18px] font-semibold text-secondary">
    <button
      type="button"
      onClick={() => setActiveTab("details")}
      className={`${activeTab === "details" ? "text-primary" : "text-accent-quinary hover:text-secondary"} transition-colors`}
    >
      Детали
    </button>
    <button
      type="button"
      onClick={() => setActiveTab("responses")}
      className={`flex items-center gap-2 ${activeTab === "responses" ? "text-primary" : "text-accent-quinary hover:text-secondary"} transition-colors`}
    >
      Отклики
      {responsesCount > 0 && (
        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-xs font-semibold text-white">
          {responsesCount}
        </span>
      )}
    </button>
  </div>
);
