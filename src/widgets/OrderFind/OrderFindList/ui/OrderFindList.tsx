"use client";

import { useState } from "react";
import { OrderCard } from "@/entities/Orders";
import { FilterMenu, SortIcon } from "@/shared/ui";
import { StateProvider } from "@/app/providers/State/StateProvider";
import { ClientPagination } from "@/features/Pagination";
import { useOrderFindList } from "../model/hooks/useOrderFindList";

function OrderFindListSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="h-[116px] rounded-3xl bg-white animate-pulse" />
      ))}
    </div>
  );
}

export function OrderFindList() {
  const {
    paginatedOrders,
    currentPage,
    totalPages,
    isLoading,
    isError,
    isEmpty,
    sortOptions,
    selectedSortId,
    selectedSortTitle,
    selectSort,
  } = useOrderFindList();

  const [isOpen, setOpen] = useState(false);

  return (
    <section className="flex flex-col gap-6">
      <div className="relative flex items-center justify-end">
        <button
          type="button"
          className="flex cursor-pointer items-center gap-2"
          aria-expanded={isOpen}
          onClick={() => setOpen((prev) => !prev)}
        >
          {selectedSortTitle}
          <span
            className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
          >
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
        errorTitle="Не удалось загрузить заказы"
        loadingComponent={<OrderFindListSkeleton />}
        emptyComponent={
          <div className="flex min-h-[200px] items-center justify-center text-accent-quinary">
            Нет заказов по выбранным фильтрам
          </div>
        }
      >
        <div className="flex flex-col gap-4">
          {paginatedOrders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </StateProvider>
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center">
          <ClientPagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      )}
    </section>
  );
}
