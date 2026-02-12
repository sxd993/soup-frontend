"use client"

import { CompanyCard } from "@/entities/Profile/Company/ui/CompanyCard"
import { FilterMenu, SortIcon } from "@/shared/ui"
import { ClientPagination } from "@/features/Pagination"
import { StateProvider } from "@/app/providers/State/StateProvider"
import { useCatalogPagination } from "../model/hooks/useCatalogPagination"

export const ScrollCatalogList = () => {
  const {
    paginatedItems,
    currentPage,
    totalPages,
    isLoading,
    isError,
    isEmpty,
    sortOptions,
    selectedSortId,
    selectedSortTitle,
    isSortMenuOpen,
    toggleSortMenu,
    selectSort,
    sortMenuRef,
  } = useCatalogPagination()

  return (
    <section className="flex flex-col gap-6">
      <div ref={sortMenuRef} className="relative flex items-center justify-end">
        <button
          type="button"
          className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-secondary transition-colors hover:bg-white/70"
          onClick={toggleSortMenu}
        >
          {selectedSortTitle}
          <SortIcon />
        </button>
        {isSortMenuOpen ? (
          <FilterMenu
            items={sortOptions}
            selectedId={selectedSortId}
            onSelect={selectSort}
          />
        ) : null}
      </div>

      <StateProvider
        isLoading={isLoading}
        isError={isError}
        isEmpty={isEmpty}
        errorTitle="Не удалось загрузить каталог"
      >
        <div className="flex flex-col gap-6">
          {paginatedItems.map((item) => (
            <CompanyCard key={item.id} item={item} />
          ))}
        </div>
      </StateProvider>

      {totalPages > 1 && (
        <div className="mt-6 flex items-center justify-center">
          <ClientPagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      )}
    </section>
  )
}
