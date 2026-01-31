"use client"

import { CompanyBlogTabs, CompanyBlogList } from "@/features/Profile/CompanyAccount/BlogSection"
import { SectionTitle } from "@/shared/ui"

export const BlogCompanySection = () => {
  return (
    <section className="flex flex-col gap-12 min-h-screen">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-7">
          <SectionTitle
            className="font-semibold text-[28px]! leading-[110%]!"
            title="Блог"
          />
        </div>
        <CompanyBlogTabs />
      </div>
      <CompanyBlogList />
    </section>
  )
}