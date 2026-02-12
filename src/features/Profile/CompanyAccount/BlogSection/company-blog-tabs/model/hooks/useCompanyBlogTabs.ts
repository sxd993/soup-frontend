"use client"

import { useState } from "react"
import { BLOG_TABS, type BlogTabStatus } from "../const/blogTabs"
import { useCompanyBlogTabsStore } from "../store/useCompanyBlogTabsStore"

export const useCompanyBlogTabs = () => {
  const [isOpen, setIsOpen] = useState(false)

  const selectedStatus = useCompanyBlogTabsStore((state) => state.selectedStatus)
  const setSelectedStatus = useCompanyBlogTabsStore((state) => state.setSelectedStatus)

  const selectedItem = BLOG_TABS.find((item) => item.id === selectedStatus) ?? BLOG_TABS[0]

  const handleSelect = (value: BlogTabStatus) => {
    setSelectedStatus(value)
  }

  const menuItems = BLOG_TABS.map((item) => ({
    id: item.menuId,
    title: item.label,
  }))

  const selectedMenuId = selectedItem.menuId

  const handleMenuSelect = (id: number) => {
    const nextItem = BLOG_TABS.find((item) => item.menuId === id)
    if (nextItem) {
      setSelectedStatus(nextItem.id)
    }
    setIsOpen(false)
  }

  return {
    items: BLOG_TABS,
    selectedStatus,
    selectedItem,
    isOpen,
    setIsOpen,
    handleSelect,
    menuItems,
    selectedMenuId,
    handleMenuSelect,
  }
}