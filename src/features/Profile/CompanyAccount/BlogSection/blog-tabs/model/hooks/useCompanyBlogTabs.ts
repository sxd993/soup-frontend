"use client"

import { BLOG_TABS, type BlogTabStatus } from "../const/blogTabs"
import { useCompanyBlogTabsStore } from "../store/useCompanyBlogTabsStore"

export const useCompanyBlogTabs = () => {
  const selectedStatus = useCompanyBlogTabsStore((state) => state.selectedStatus)
  const setSelectedStatus = useCompanyBlogTabsStore((state) => state.setSelectedStatus)

  const selectedItem = BLOG_TABS.find((item) => item.id === selectedStatus) ?? BLOG_TABS[0]

  const handleSelect = (value: BlogTabStatus) => {
    setSelectedStatus(value)
  }

  return {
    items: BLOG_TABS,
    selectedStatus,
    selectedItem,
    handleSelect,
  }
}