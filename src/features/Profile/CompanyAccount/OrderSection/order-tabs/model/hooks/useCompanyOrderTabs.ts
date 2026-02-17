"use client";

import { useState } from "react";
import {
  COMPANY_ORDER_TABS,
  type CompanyOrderTabStatus,
} from "../const/orderTabs";
import { useCompanyOrderTabsStore } from "../store/useCompanyOrderTabsStore";

export const useCompanyOrderTabs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedStatus = useCompanyOrderTabsStore((state) => state.selectedStatus);
  const setSelectedStatus = useCompanyOrderTabsStore(
    (state) => state.setSelectedStatus,
  );

  const items = COMPANY_ORDER_TABS;
  const selectedItem = COMPANY_ORDER_TABS.find((item) => item.id === selectedStatus) ?? COMPANY_ORDER_TABS[0];

  const handleSelect = (value: CompanyOrderTabStatus) => {
    if (value === selectedStatus) return;
    setSelectedStatus(value);
  };

  const menuItems = COMPANY_ORDER_TABS.map((item) => ({
    id: item.menuId,
    title: item.label,
  }));

  const selectedMenuId = selectedItem.menuId;

  const handleMenuSelect = (id: number) => {
    const nextItem = COMPANY_ORDER_TABS.find((item) => item.menuId === id);
    if (nextItem) {
      setSelectedStatus(nextItem.id);
    }
    setIsOpen(false);
  };

  return {
    items,
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
