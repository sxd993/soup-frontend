"use client";

import {
  COMPANY_ORDER_TABS,
  type CompanyOrderTabStatus,
} from "../const/orderTabs";
import { useCompanyOrderTabsStore } from "../store/useCompanyOrderTabsStore";

export const useCompanyOrderTabs = () => {
  const selectedStatus = useCompanyOrderTabsStore((state) => state.selectedStatus);
  const setSelectedStatus = useCompanyOrderTabsStore(
    (state) => state.setSelectedStatus,
  );

  const items = COMPANY_ORDER_TABS;

  const handleSelect = (value: CompanyOrderTabStatus) => {
    if (value === selectedStatus) return;
    setSelectedStatus(value);
  };

  return {
    items,
    selectedStatus,
    handleSelect,
  };
};
