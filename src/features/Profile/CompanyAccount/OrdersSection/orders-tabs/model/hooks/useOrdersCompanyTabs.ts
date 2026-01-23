"use client"

import { ORDER_TABS, type OrderStatus } from "../const/orderTabs"
import { useCompanyOrdersTabsStore } from "../store/useCompanyOrdersTabsStore"

export const useOrdersCompanyTabs = () => {
    const selectedStatus = useCompanyOrdersTabsStore((state) => state.selectedStatus)
    const setSelectedStatus = useCompanyOrdersTabsStore((state) => state.setSelectedStatus)

    const selectedItem = ORDER_TABS.find((item) => item.id === selectedStatus) ?? ORDER_TABS[0]

    const handleSelect = (value: OrderStatus) => {
        setSelectedStatus(value)
    }

    return {
        items: ORDER_TABS,
        selectedStatus,
        selectedItem,
        handleSelect,
    }
}
