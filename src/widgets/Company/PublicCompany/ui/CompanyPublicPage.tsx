"use client";

import { useState } from "react";
import { AdsBanner } from "@/shared/ui";
import { StateProvider } from "@/app/providers/State/StateProvider";
import { useCompanyPublicPage } from "../model/hooks/useCompanyPublicPage";
import {
  CompanyBlogSection,
  CompanyContactsSection,
  CompanyHeader,
  CompanyReviewsSection,
  CompanyServicesSection,
  CompanyTabs,
} from "./sections";
import { SimilarCompaniesBlock } from "./SimilarCompaniesBlock";
import { CompanyPublicPageSkeleton } from "./CompanyPublicPageSkeleton";

type CompanyPublicPageProps = {
  companyId: string;
};

type CompanyTab = "services" | "reviews" | "blog" | "contacts";

export const CompanyPublicPage = ({ companyId }: CompanyPublicPageProps) => {
  const [activeTab, setActiveTab] = useState<CompanyTab>("services");
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
    contactsData,
    blogs,
    isBlogsLoading,
    isBlogsError,
    handleCall,
  } = useCompanyPublicPage(companyId);

  return (
    <section className="min-w-0 max-w-full mt-8 overflow-x-hidden pb-16">
      <StateProvider
        isLoading={isLoading}
        isError={isError}
        isEmpty={!company}
        errorTitle="Не удалось загрузить компанию"
        loadingComponent={<CompanyPublicPageSkeleton />}>
        <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-[1fr_300px]">
          <div className="flex min-w-0 flex-col gap-6">
            {company ? (
              <CompanyHeader
                companyId={companyId}
                name={company.name}
                description={company.description}
                logoUrl={company.logoUrl}
                regions={regions}
                canShowAllRegions={canShowAllRegions}
                isRegionsExpanded={isRegionsExpanded}
                onToggleRegions={toggleRegions}
                onCall={handleCall}
                canCall={contactsData.phones.length > 0}
              />
            ) : null}

            <CompanyTabs activeTab={activeTab} onChange={setActiveTab} />

            {activeTab === "services" ? (
              <CompanyServicesSection services={services} openSectionIds={openSectionIds} toggleSection={toggleSection} />
            ) : null}

            {activeTab === "reviews" ? <CompanyReviewsSection companyId={companyId} /> : null}
            {activeTab === "blog" ? <CompanyBlogSection blogs={blogs} isLoading={isBlogsLoading} isError={isBlogsError} /> : null}
            {activeTab === "contacts" ? <CompanyContactsSection data={contactsData} /> : null}
          </div>

          <aside className="flex flex-col gap-6">
            <SimilarCompaniesBlock companyId={companyId} services={services} />

            <AdsBanner hasDescription={true} />
          </aside>
        </div>
      </StateProvider>
    </section>
  );
};
