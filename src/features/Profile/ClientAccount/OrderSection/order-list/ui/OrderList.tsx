"use client";

import { StateProvider } from "@/app/providers/State/StateProvider";
import { useOrderList } from "../model/hooks/useOrderList";
import { OrderListSkeleton } from "./OrderListSkeleton";

export const OrderList = () => {
  const { orderItems, isEmpty, isLoading, isError } = useOrderList();

  return (
    <StateProvider
      isLoading={isLoading}
      isError={isError}
      isEmpty={isEmpty}
      errorTitle="Не удалось загрузить заказы"
      loadingComponent={<OrderListSkeleton />}
    >
      <ul className="flex flex-col gap-4">
        {orderItems.map((item) => {
          const Icon = item.Icon;
          return (
          <li
            key={item.id}
            className="flex flex-col gap-3 rounded-[20px] bg-white p-5"
          >
            <div className="flex items-start justify-between">
              <div className="flex min-w-0 flex-1 gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] text-primary">
                  <Icon />
                </div>
                <h3 className="min-w-0 flex-1 font-bold text-[22px] leading-[1.15] text-secondary">
                  {item.title}
                </h3>
              </div>
              <p className="shrink-0 pl-4 text-right text-[28px] font-semibold leading-[1.1] text-secondary">
                {item.priceText}
              </p>
            </div>
            <div className="flex items-center justify-between pl-14">
              <p className="text-[14px] font-normal leading-[1.3] text-accent-septenary">
                {item.region}
              </p>
              <p className="text-[14px] font-normal leading-[1.3] text-accent-septenary">
                {item.createdLabel}
              </p>
            </div>
          </li>
          );
        })}
      </ul>
    </StateProvider>
  );
};
