'use client'

import {
  Button,
  QueryState,
  Search,
  DesigningIcon,
  GreeningIcon,
  ProductionIcon,
  InstallationIcon,
  SuppliersIcon,
  EducationIcon,
  CheckIcon,
} from "@/shared/ui"
import { CATALOG_FILTERS_MESSAGES, REGION_FILTERS } from "@/entities/CatalogFilters/model/const/filters"
import { useCatalogFiltersData } from "@/entities/CatalogFilters/model/hooks/useCatalogFiltersData"
import { useCatalogFilters } from "../model/hooks/useCatalogFilters"

export const CatalogFilters = () => {
  const { openSectionIds, toggleSection } = useCatalogFilters()
  const { data: sections = [], isLoading, isError } = useCatalogFiltersData()
  const iconMap: Record<string, React.ReactNode> = {
    Проектирование: <DesigningIcon />,
    Озеленение: <GreeningIcon />,
    Производство: <ProductionIcon />,
    "Монтажные работы": <InstallationIcon />,
    Поставщики: <SuppliersIcon />,
    Обучение: <EducationIcon />,
  }

  return (
    <aside className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold text-secondary">Регион</p>
        <label className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#C5C2C2]" />
          <input
            type="text"
            placeholder="поиск по региону"
            className="w-full rounded-full bg-white py-3 pl-9 pr-4 text-sm text-secondary placeholder:text-[#C5C2C2] outline-none"
          />
        </label>
        <div className="flex flex-col gap-3 pl-4">
          {REGION_FILTERS.map((region) => (
            <label key={region.id} className="flex items-center gap-3 text-sm text-secondary">
              <span className="relative h-5 w-5">
                <input
                  type="checkbox"
                  className="peer h-5 w-5 appearance-none rounded-[6px] border border-[#8BC652] bg-white checked:bg-[#8BC652]"
                  defaultChecked={Boolean(region.isSelected)}
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity peer-checked:opacity-100">
                  <CheckIcon />
                </span>
              </span>
              {region.label}
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-lg font-semibold text-secondary">Сфера деятельности</p>
        <QueryState
          isLoading={isLoading}
          isError={isError}
          isEmpty={sections.length === 0}
          loadingMessage={CATALOG_FILTERS_MESSAGES.loading}
          errorMessage={CATALOG_FILTERS_MESSAGES.error}
          emptyMessage={CATALOG_FILTERS_MESSAGES.empty}
        >
          <div className="flex flex-col gap-2">
            {sections.map((section) => {
              const isOpen = openSectionIds.has(section.id)
              return (
                <div key={section.id} className="flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => toggleSection(section.id)}
                    className={`group flex h-12 items-center justify-between rounded-full px-4 text-[16px] font-semibold leading-[140%] text-[#2F2F2F] ${
                      isOpen ? "bg-white hover:bg-white" : "bg-transparent"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full">
                        {iconMap[section.label] ?? section.label[0]}
                      </span>
                      {section.label}
                    </span>
                    <span className="relative h-4 w-4 text-accent-secondary">
                      <svg
                        className={`absolute inset-0 h-4 w-4 transition-opacity duration-200 ${
                          isOpen ? "opacity-0" : "opacity-100"
                        }`}
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M1 1L6 6L11 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <svg
                        className={`absolute inset-0 h-4 w-4 transition-opacity duration-200 ${
                          isOpen ? "opacity-100" : "opacity-0"
                        }`}
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M1 7L6 2L11 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`flex flex-col gap-3 overflow-hidden pl-4 transition-[max-height,opacity] duration-500 ease-in-out ${
                      isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    {section.items.map((item) => (
                      <label key={item.id} className="flex items-center gap-3 text-sm text-secondary">
                        <span className="relative h-5 w-5">
                          <input
                            type="checkbox"
                            className="peer h-5 w-5 appearance-none rounded-[6px] border border-[#8BC652] bg-white checked:bg-[#8BC652]"
                          />
                          <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity peer-checked:opacity-100">
                            <CheckIcon />
                          </span>
                        </span>
                        {item.label}
                      </label>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </QueryState>
        <Button className="mt-3 w-full rounded-full bg-primary text-accent-senary">
          Сбросить все
        </Button>
      </div>
    </aside>
  )
}
