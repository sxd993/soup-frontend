"use client"

import { CompanyBlogTabs, CompanyBlogList } from "@/features/Profile/CompanyAccount/BlogSection"
import { SectionTitle, ViewAllButton } from "@/shared/ui"

export const BlogCompanySection = () => {
  return (
    <section className="flex flex-col gap-12 min-h-screen">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-7">
          <SectionTitle
            className="font-semibold text-[28px]! leading-[110%]!"
            title="Блоги"
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <CompanyBlogTabs />
          <ViewAllButton href="/profile/company/blog/new" text="+ Новая публикация" />
        </div>
      </div>
      <CompanyBlogList />
    </section>
  )
}