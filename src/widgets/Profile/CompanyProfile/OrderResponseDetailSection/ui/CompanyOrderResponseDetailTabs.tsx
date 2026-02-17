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
  <div className="flex flex-wrap justify-center gap-4 md:gap-8">
    {COMPANY_ORDER_DETAIL_TABS.map((tab) => (
      <button
        key={tab.id}
        type="button"
        onClick={() => setActiveTab(tab.id)}
        className={`cursor-pointer text-[16px]! font-semibold! leading-[110%]! transition-colors md:text-[18px]! ${
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
