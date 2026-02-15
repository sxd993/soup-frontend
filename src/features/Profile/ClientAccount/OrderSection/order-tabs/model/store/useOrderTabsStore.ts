"use client"

import { create } from "zustand"
import { ORDER_TABS, type OrderTabStatus } from "../const/orderTabs"

interface OrderTabsStoreState {
  selectedStatus: OrderTabStatus
  setSelectedStatus: (value: OrderTabStatus) => void
}

export const useOrderTabsStore = create<OrderTabsStoreState>((set) => ({
  selectedStatus: ORDER_TABS[0]?.id ?? "active",
  setSelectedStatus: (value) => set(() => ({ selectedStatus: value })),
}))
