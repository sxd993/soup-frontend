"use client";

import { useState } from "react";
import { CompanyCard } from "@/entities/Profile/Company/ui/CompanyCard";
import { FilterMenu, SortIcon } from "@/shared/ui";
import { ClientPagination } from "@/features/Pagination";
import { StateProvider } from "@/app/providers/State/StateProvider";
import { useCatalogPagination } from "../model/hooks/useCatalogPagination";
import { ScrollCatalogListSkeleton } from "./ScrollCatalogListSkeleton";

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
    selectSort,
  } = useCatalogPagination();

  const [isOpen, setOpen] = useState(false);

  return (
    <section className="flex flex-col gap-6">
      <div className="relative flex items-center justify-end">
        <button
          type="button"
          className="flex cursor-pointer items-center gap-2"
          aria-expanded={isOpen}
          onClick={() => setOpen((prev) => !prev)}>
          {selectedSortTitle}
          <span className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}>
            <SortIcon />
          </span>
        </button>
        {isOpen && (
          <FilterMenu
            items={sortOptions}
            selectedId={selectedSortId}
            onSelect={(id) => {
              selectSort(id);
              setOpen(false);
            }}
          />
        )}
      </div>

      <StateProvider
        isLoading={isLoading}
        isError={isError}
        isEmpty={isEmpty}
        errorTitle="Не удалось загрузить каталог"
        loadingComponent={<ScrollCatalogListSkeleton />}>
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
  );
};
