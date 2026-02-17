"use client";

import {
  COMPANY_ORDER_DETAIL_TABS,
  type CompanyOrderDetailTab,
} from "../model/const/companyOrderDetailTabs";

type CompanyOrderResponseDetailTabsProps = {
  activeTab: CompanyOrderDetailTab;
  setActiveTab: (tab: CompanyOrderDetailTab) => void;
};

export const CompanyOrderResponseDetailTabs = ({
  activeTab,
  setActiveTab,
}: CompanyOrderResponseDetailTabsProps) => (
  <div className="flex flex-wrap justify-center gap-8">
    {COMPANY_ORDER_DETAIL_TABS.map((tab) => (
      <button
        key={tab.id}
        type="button"
        onClick={() => setActiveTab(tab.id)}
        className={`cursor-pointer text-[18px]! font-semibold! leading-[110%]! transition-colors ${
          activeTab === tab.id
            ? "text-primary!"
            : "text-accent-septenary! hover:text-secondary!"
        }`}
      >
        {tab.label}
      </button>
    ))}
  </div>
);
