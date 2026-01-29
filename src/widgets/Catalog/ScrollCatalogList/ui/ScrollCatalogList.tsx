"use client"

import { CompanyCard } from "@/entities/Profile/Company/ui/CompanyCard"
import { SortIcon } from "@/shared/ui"
import { ClientPagination } from "@/features/Pagination"
import { StateProvider } from "@/app/providers/State/StateProvider"
import { useCatalogPagination } from "../model/hooks/useCatalogPagination"

export const ScrollCatalogList = () => {
  const { paginatedItems, currentPage, totalPages, isLoading, isError, isEmpty } =
    useCatalogPagination()

  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-end">
        <button
          type="button"
          className="flex items-center gap-2 text-sm font-semibold text-secondary"
        >
          по умолчанию
          <SortIcon />
        </button>
      </div>

      <StateProvider
        isLoading={isLoading}
        isError={isError}
        isEmpty={isEmpty}
        loadingMessage="Загружаем каталог..."
        errorMessage="Не удалось загрузить каталог"
        emptyMessage="Компаний пока нет"
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
