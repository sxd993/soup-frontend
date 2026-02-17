"use client"

import Image from "next/image"
import Link from "next/link"
import { MainIcon } from "@/shared/ui"
import { useSimilarCompanies } from "../model/hooks/useSimilarCompanies"
import type { CompanyServiceCategory } from "@/entities/Profile/Company/model/types/company-services.types"

type SimilarCompaniesBlockProps = {
  companyId: string
  services: CompanyServiceCategory[]
}

export function SimilarCompaniesBlock({ companyId, services }: SimilarCompaniesBlockProps) {
  const { similarCompanies, isLoading } = useSimilarCompanies(companyId, services)

  return (
    <div className="rounded-[26px] bg-white p-5">
      <h3 className="text-lg font-semibold text-secondary">Похожие компании</h3>
      <div className="mt-4 flex flex-col gap-4">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-12 w-12 shrink-0 rounded-[12px] bg-[#E5E0D6] animate-pulse" />
              <div className="min-w-0 flex-1 space-y-1">
                <div className="h-4 w-3/4 rounded bg-[#E5E0D6] animate-pulse" />
                <div className="h-3 w-1/2 rounded bg-[#E5E0D6] animate-pulse" />
              </div>
            </div>
          ))
        ) : similarCompanies.length === 0 ? (
          <p className="text-sm text-accent-quinary">Нет похожих компаний</p>
        ) : (
          similarCompanies.map((company) => (
            <Link
              key={company.id}
              href={`/catalog/company?id=${company.id}`}
              className="flex items-center gap-3 transition-opacity hover:opacity-80"
            >
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[12px] bg-white p-1">
                {company.logoUrl ? (
                  <Image
                    src={company.logoUrl}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                ) : (
                  <MainIcon className="h-full w-full" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-secondary line-clamp-1">{company.name}</p>
                <p className="text-xs text-accent-quinary line-clamp-1">{company.description || ""}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}
