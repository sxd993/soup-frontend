"use client";

import { StateProvider } from "@/app/providers/State/StateProvider";
import { useOrderList } from "../model/hooks/useOrderList";
import { OrderListSkeleton } from "./OrderListSkeleton";

const EmptyOrdersMessage = () => (
  <div className="rounded-[20px] bg-white p-5 text-accent-septenary">
    Заказов пока нет
  </div>
);

export const OrderList = () => {
  const {
    orderItems,
    isEmpty,
    isLoading,
    isError,
    isUpdating,
  } = useOrderList();

  return (
    <StateProvider
      isLoading={isLoading}
      isError={isError}
      isEmpty={isEmpty}
      errorTitle="Не удалось загрузить заказы"
      loadingComponent={<OrderListSkeleton />}
      emptyComponent={<EmptyOrdersMessage />}
    >
      <ul className="flex flex-col gap-4">
        {orderItems.map((item) => (
          <li
            key={item.id}
            className="rounded-[20px] bg-white p-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="min-w-0">
              <h3 className="text-lg font-semibold text-secondary truncate">
                {item.title}
              </h3>
              <p className="text-sm text-accent-septenary">{item.region}</p>
              <p className="text-sm text-accent-septenary mt-1">
                {item.dateText} · {item.priceText}
              </p>
            </div>
            <div className="shrink-0">
              <button
                type="button"
                disabled={isUpdating}
                onClick={item.onStatusClick}
                className="rounded-[20px] border-2 border-[#C5C2C2] px-4 py-2 text-sm font-medium text-secondary hover:border-primary hover:text-primary disabled:opacity-50 transition"
              >
                {item.statusButtonLabel}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </StateProvider>
  );
};
