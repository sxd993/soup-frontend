"use client";

import { OrderCard } from "@/entities/Orders/ui/OrderCard";
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
  } = useOrderFindList();

  return (
    <section className="flex flex-col gap-6">
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
