"use client"

import { CATALOG_COMPANIES } from "@/entities/Company/model/const/companies"
import { CompanyCard } from "@/entities/Company/ui/CompanyCard"
import { SortIcon } from "@/shared/ui"

export const ScrollCatalogList = () => {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-accent-quinary">по умолчанию</p>
        <button
          type="button"
          className="flex items-center gap-2 text-sm font-semibold text-secondary"
        >
          Сортировка
          <SortIcon />
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {CATALOG_COMPANIES.map((item) => (
          <CompanyCard key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4 text-base font-semibold text-accent-quinary">
        <button type="button" className="h-8 w-8 rounded-full bg-primary text-accent-senary">
          1
        </button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button">4</button>
        <button type="button">Далее</button>
      </div>
    </section>
  )
}
