'use client'

import {
  Button,
  Search,
  CheckIcon,
  ScrollContainer,
} from "@/shared/ui"
import { StateProvider } from "@/app/providers/State/StateProvider"
import { CATALOG_FILTERS_MESSAGES } from "../const/filters"
import { useCatalogFilters } from "../model/hooks/useCatalogFilters"
import { CatalogFiltersSkeleton } from "./CatalogFiltersSkeleton"
import { RegionsListSkeleton } from "./RegionsListSkeleton"

export const CatalogFilters = () => {
  const {
    openSectionIds,
    toggleSection,
    sections,
    isLoading,
    isError,
    isRegionsLoading,
    isRegionsError,
    regionQuery,
    setRegionQuery,
    filteredRegions,
    selectedRegionIds,
    toggleRegion,
    selectedSectionItemIds,
    toggleSectionItem,
    resetAll,
    isResetDisabled,
    iconMap,
    getSectionMaxHeight,
  } = useCatalogFilters()

  return (
    <aside className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold text-secondary">Регион</p>
        <label className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#C5C2C2]" />
          <input
            type="text"
            placeholder="поиск по региону"
            value={regionQuery}
            onChange={(event) => setRegionQuery(event.target.value)}
            className="w-full rounded-full bg-white py-3 pl-9 pr-4 text-sm text-secondary placeholder:text-[#C5C2C2] outline-none"
          />
        </label>
        <StateProvider
          isLoading={isRegionsLoading}
          isError={isRegionsError}
          isEmpty={filteredRegions.length === 0}
          errorTitle="Не удалось загрузить регионы"
          loadingComponent={<RegionsListSkeleton />}
        >
          <ScrollContainer className="flex h-[180px] flex-col gap-3 pl-4 pr-1">
            {filteredRegions.map((region) => (
              <label key={region.id} className="flex items-center gap-3 text-sm text-secondary">
                <span className="relative h-5 w-5">
                  <input
                    type="checkbox"
                    className="peer h-5 w-5 appearance-none rounded-[6px] border-primary bg-white checked:bg-primary"
                    checked={selectedRegionIds.includes(region.id)}
                    onChange={() => toggleRegion(region.id)}
                  />
                  <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity peer-checked:opacity-100">
                    <CheckIcon />
                  </span>
                </span>
                {region.label}
              </label>
            ))}
          </ScrollContainer>
        </StateProvider>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-lg font-semibold text-secondary">Сфера деятельности</p>
        <StateProvider
          isLoading={isLoading}
          isError={isError}
          isEmpty={sections.length === 0}
          errorTitle={CATALOG_FILTERS_MESSAGES.error}
          loadingComponent={<CatalogFiltersSkeleton />}
        >
          <div className="flex flex-col gap-2">
            {sections.map((section) => {
              const isOpen = openSectionIds.has(section.id)
              return (
                <div key={section.id} className="flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => toggleSection(section.id)}
                    className={`group flex h-12 items-center justify-between rounded-full px-4 text-[16px] font-semibold leading-[140%] text-secondary ${
                      isOpen ? "bg-white hover:bg-white" : "bg-transparent"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full">
                        {iconMap[section.label] ? (
                          (() => {
                            const Icon = iconMap[section.label]
                            return <Icon isActive={isOpen} />
                          })()
                        ) : (
                          section.label[0]
                        )}
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
                    style={{ maxHeight: getSectionMaxHeight(section.items.length, isOpen) }}
                    className={`flex flex-col gap-3 overflow-hidden pl-4 transition-[max-height,opacity] duration-500 ease-in-out ${
                      isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    {section.items.map((item) => (
                      <label key={item.id} className="flex items-center gap-3 text-sm text-secondary">
                        <span className="relative h-5 w-5">
                          <input
                            type="checkbox"
                            className="peer h-5 w-5 appearance-none rounded-[6px] border-primary bg-white checked:bg-primary"
                            checked={selectedSectionItemIds.includes(item.id)}
                            onChange={() => toggleSectionItem(item.id)}
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
        </StateProvider>
        <Button
          className="mt-3 w-full rounded-full bg-primary text-accent-senary hover:bg-accent active:bg-[#80D62C] disabled:bg-[#D3EBBB]"
          onClick={resetAll}
          disabled={isResetDisabled}
        >
          Сбросить все
        </Button>
      </div>
    </aside>
  )
}
