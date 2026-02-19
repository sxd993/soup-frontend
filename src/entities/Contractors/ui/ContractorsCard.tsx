"use client"

import { useRouter } from "next/navigation"
import { Badge, RightArrow } from "@/shared/ui"
import { useCatalogFiltersStore } from "@/widgets/Catalog/Filters/model/store/useCatalogFiltersStore"
import type { ContractorsTypes } from "../model/types/contractors.types"

type ContractorsCardProps = {
  contractor: ContractorsTypes
}

export const ContractorsCard = ({ contractor }: ContractorsCardProps) => {
  const router = useRouter()
  const setSelectedService = useCatalogFiltersStore((state) => state.setSelectedService)
  const setSelectedFilters = useCatalogFiltersStore((state) => state.setSelectedFilters)

  const handleBadgeClick = (badge: string) => {
    setSelectedService({ category: contractor.title, service: badge })
    router.push("/catalog")
  }

  const handleArrowClick = () => {
    const filters = contractor.subcategories.map((sub) => ({
      category: contractor.title,
      service: sub.title,
    }))
    setSelectedFilters(filters, [contractor.title])
    router.push("/catalog")
  }

  return (
    <div className="flex flex-col justify-between gap-6 rounded-2xl bg-white p-5">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-2xl font-semibold leading-tight text-gray-900">{contractor.title}</h3>
        <button
          type="button"
          onClick={handleArrowClick}
          className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-primary transition-all duration-300 hover:bg-accent"
          aria-label={`Перейти в каталог: все услуги категории ${contractor.title}`}
        >
          <RightArrow />
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {contractor.subcategories.map((subcategory) => (
          <button
            key={subcategory.title}
            type="button"
            onClick={() => handleBadgeClick(subcategory.title)}
            className="rounded-full"
          >
            <Badge badge={subcategory.title} />
          </button>
        ))}
      </div>
    </div>
  )
}
