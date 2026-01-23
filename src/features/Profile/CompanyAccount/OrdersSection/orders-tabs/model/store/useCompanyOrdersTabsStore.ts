"use client"

import { create } from "zustand"
import { ORDER_TABS, type OrderStatus } from "../const/orderTabs"

interface CompanyOrdersTabsStoreState {
    selectedStatus: OrderStatus
    setSelectedStatus: (value: OrderStatus) => void
}

export const useCompanyOrdersTabsStore = create<CompanyOrdersTabsStoreState>((set) => ({
    selectedStatus: ORDER_TABS[0]?.id ?? "responded",
    setSelectedStatus: (value) => set(() => ({ selectedStatus: value })),
}))
