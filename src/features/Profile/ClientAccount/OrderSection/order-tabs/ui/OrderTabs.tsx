"use client";

import { SortIcon } from "@/shared/ui";
import { FilterMenu } from "@/shared/ui";
import { useOrderTabs } from "../model/hooks/useOrderTabs";
import type { OrderTabStatus } from "../../model/const/orderTabs";

export const OrderTabs = () => {
  const {
    items,
    selectedItem,
    isOpen,
    setIsOpen,
    handleSelect,
    menuItems,
    selectedMenuId,
    handleMenuSelect,
  } = useOrderTabs();

  return (
    <>
      <div className="relative lg:hidden">
        <button
          type="button"
          className="flex gap-2 items-center cursor-pointer"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <p className="text-secondary font-semibold leading-[130%] text-sm">
            {selectedItem.label}
          </p>
          <span
            className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
          >
            <SortIcon />
          </span>
        </button>
        {isOpen && (
          <FilterMenu
            items={menuItems}
            selectedId={selectedMenuId}
            className="right-0 left-auto lg:left-0 lg:right-auto"
            onSelect={handleMenuSelect}
          />
        )}
      </div>

      <div className="hidden lg:inline-flex flex-wrap rounded-[40px]">
        {items.map((item) => {
          const isActive = item.id === selectedItem.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleSelect(item.id as OrderTabStatus)}
              className={`rounded-[40px] px-6 py-2 text-[16px] font-semibold transition-colors ${
                isActive ? "bg-white text-secondary" : "text-accent-septenary"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </>
  );
};
