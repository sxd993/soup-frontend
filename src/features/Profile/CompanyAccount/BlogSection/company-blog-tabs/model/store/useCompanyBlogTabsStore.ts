"use client"

import { create } from "zustand"
import { BLOG_TABS, type BlogTabStatus } from "../const/blogTabs"

interface CompanyBlogTabsStoreState {
  selectedStatus: BlogTabStatus
  setSelectedStatus: (value: BlogTabStatus) => void
}

export const useCompanyBlogTabsStore = create<CompanyBlogTabsStoreState>((set) => ({
  selectedStatus: BLOG_TABS[0]?.id ?? "published",
  setSelectedStatus: (value) => set(() => ({ selectedStatus: value })),
}))