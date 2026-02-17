"use client"

import { SortIcon } from "@/shared/ui"
import { FilterMenu } from "@/shared/ui/FilterMenu/ui/FilterMenu"
import { useCompanyBlogTabs } from "../model/hooks/useCompanyBlogTabs"
import type { BlogTabStatus } from "../model/const/blogTabs"

export const CompanyBlogTabs = () => {
  const {
    items,
    selectedStatus,
    selectedItem,
    isOpen,
    setIsOpen,
    handleSelect,
    menuItems,
    selectedMenuId,
    handleMenuSelect,
  } = useCompanyBlogTabs()

  return (
    <>
      <div className="relative lg:hidden">
        <button
          type="button"
          className="flex cursor-pointer items-center gap-2"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {selectedItem.label}
          <span className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}>
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
          const isActive = item.id === selectedStatus
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleSelect(item.id as BlogTabStatus)}
              className={`rounded-[40px] px-6 py-2 text-[16px] font-semibold transition-colors ${
                isActive ? "bg-white text-secondary" : "text-accent-septenary"
              }`}
            >
              {item.label}
            </button>
          )
        })}
      </div>
    </>
  )
}
