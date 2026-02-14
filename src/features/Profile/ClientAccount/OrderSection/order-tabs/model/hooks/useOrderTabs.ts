"use client";

import { useState } from "react";
import { ORDER_TABS, type OrderTabStatus } from "../../../model/const/orderTabs";
import { useOrderTabsStore } from "../../../model/store/useOrderTabsStore";

export const useOrderTabs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedStatus = useOrderTabsStore((state) => state.selectedStatus);
  const setSelectedStatus = useOrderTabsStore(
    (state) => state.setSelectedStatus
  );

  const selectedItem =
    ORDER_TABS.find((item) => item.id === selectedStatus) ?? ORDER_TABS[0];

  const handleSelect = (value: OrderTabStatus) => {
    setSelectedStatus(value);
  };

  const menuItems = ORDER_TABS.map((item) => ({
    id: item.menuId,
    title: item.label,
  }));

  const selectedMenuId = selectedItem.menuId;

  const handleMenuSelect = (id: number) => {
    const nextItem = ORDER_TABS.find((item) => item.menuId === id);
    if (nextItem) {
      setSelectedStatus(nextItem.id);
    }
    setIsOpen(false);
  };

  return {
    items: ORDER_TABS,
    selectedStatus,
    selectedItem,
    isOpen,
    setIsOpen,
    handleSelect,
    menuItems,
    selectedMenuId,
    handleMenuSelect,
  };
};
