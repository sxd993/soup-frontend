"use client"

import { useCompanyBlogTabs } from "../model/hooks/useCompanyBlogTabs"
import type { BlogTabStatus } from "../model/const/blogTabs"

export const CompanyBlogTabs = () => {
  const { items, selectedStatus, handleSelect } = useCompanyBlogTabs()

  return (
    <div className="flex flex-wrap rounded-[40px] p-2">
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
  )
}