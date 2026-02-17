"use client";

import { create } from "zustand";
import {
  COMPANY_ORDER_TABS,
  type CompanyOrderTabStatus,
} from "../const/orderTabs";

type CompanyOrderTabsStoreState = {
  selectedStatus: CompanyOrderTabStatus;
  setSelectedStatus: (value: CompanyOrderTabStatus) => void;
};

export const useCompanyOrderTabsStore = create<CompanyOrderTabsStoreState>(
  (set) => ({
    selectedStatus: COMPANY_ORDER_TABS[0]?.id ?? "responded",
    setSelectedStatus: (value) => set(() => ({ selectedStatus: value })),
  }),
);
