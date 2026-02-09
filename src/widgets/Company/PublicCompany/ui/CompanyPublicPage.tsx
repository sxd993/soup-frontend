"use client"

import { useState } from "react"
import { AdsBanner } from "@/shared/ui"
import { StateProvider } from "@/app/providers/State/StateProvider"
import { useCompanyPublicPage } from "../model/hooks/useCompanyPublicPage"
import {
  CompanyBlogSection,
  CompanyContactsSection,
  CompanyHeader,
  CompanyReviewsSection,
  CompanyServicesSection,
  CompanyTabs,
} from "./sections"

type CompanyPublicPageProps = {
  companyId: string
}

type CompanyTab = "services" | "reviews" | "blog" | "contacts"

export const CompanyPublicPage = ({ companyId }: CompanyPublicPageProps) => {
  const [activeTab, setActiveTab] = useState<CompanyTab>("services")
  const {
    company,
    isLoading,
    isError,
    regions,
    canShowAllRegions,
    isRegionsExpanded,
    toggleRegions,
    services,
    openSectionIds,
    toggleSection,
    iconMap,
    contactsData,
    blogs,
    isBlogsLoading,
    isBlogsError,
  } = useCompanyPublicPage(companyId)

  return (
    <section className="mt-8 pb-16">
      <StateProvider
        isLoading={isLoading}
        isError={isError}
        isEmpty={!company}
        loadingMessage="Загружаем компанию..."
        errorMessage="Не удалось загрузить компанию"
        emptyMessage="Компания не найдена"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px]">
          <div className="flex flex-col gap-6">
            {company ? (
              <CompanyHeader
                name={company.name}
                description={company.description}
                logoUrl={company.logoUrl}
                regions={regions}
                canShowAllRegions={canShowAllRegions}
                isRegionsExpanded={isRegionsExpanded}
                onToggleRegions={toggleRegions}
              />
            ) : null}

            <CompanyTabs activeTab={activeTab} onChange={setActiveTab} />

            {activeTab === "services" ? (
              <CompanyServicesSection
                services={services}
                openSectionIds={openSectionIds}
                toggleSection={toggleSection}
                iconMap={iconMap}
              />
            ) : null}

            {activeTab === "reviews" ? <CompanyReviewsSection /> : null}
            {activeTab === "blog" ? (
              <CompanyBlogSection blogs={blogs} isLoading={isBlogsLoading} isError={isBlogsError} />
            ) : null}
            {activeTab === "contacts" ? (
              <CompanyContactsSection data={contactsData} />
            ) : null}
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-[26px] bg-white p-5">
              <h3 className="text-lg font-semibold text-secondary">Похожие компании</h3>
              <div className="mt-4 flex flex-col gap-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-[12px] bg-[#E5E0D6]" />
                    <div>
                      <p className="text-sm font-semibold text-secondary">Название компании</p>
                      <p className="text-xs text-accent-quinary">Екатеринбург</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[26px] bg-white p-4">
              <AdsBanner hasDescription={true} />
            </div>
          </aside>
        </div>
      </StateProvider>
    </section>
  )
}
