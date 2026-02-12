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
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="self-end lg:order-1 lg:self-auto">
            <CompanyBlogTabs />
          </div>
          <ViewAllButton
            href="/profile/company/blog/new"
            text="+ Новая публикация"
            className="w-auto! text-sm! py-2! md:text-base! lg:order-2"
          />
        </div>
      </div>
      <CompanyBlogList />
    </section>
  )
}