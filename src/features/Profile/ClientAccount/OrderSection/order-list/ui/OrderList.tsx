"use client";

import Link from "next/link";
import { StateProvider } from "@/app/providers/State/StateProvider";
import { OrderCardHeader } from "../../order-card-header";
import { useOrderListPagination } from "../model/hooks/useOrderListPagination";
import { OrderListSkeleton } from "./OrderListSkeleton";
import { OrderPaginationControls } from "./OrderPaginationControls";

export const OrderList = () => {
  const {
    orderItems,
    isEmpty,
    isLoading,
    isError,
    totalOrders,
    pagination,
  } = useOrderListPagination();

  return (
    <StateProvider
      isLoading={isLoading}
      isError={isError}
      isEmpty={isEmpty}
      errorTitle="Не удалось загрузить заказы"
      loadingComponent={<OrderListSkeleton />}
    >
      <div className="flex flex-col gap-6">
        <ul className="flex flex-col gap-4">
          {orderItems.map((item) => {
            const Icon = item.Icon;
            return (
              <li key={item.id}>
                <Link
                  href={`/profile/client/orders/${item.id}`}
                  className="flex flex-col gap-3 rounded-[20px] bg-white p-5 transition-opacity hover:opacity-90"
                >
                  <OrderCardHeader
                    Icon={Icon}
                    title={item.title}
                    region={item.region}
                    priceText={item.priceText}
                    createdLabel={item.createdLabel}
                    titleAs="h3"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
        {totalOrders > 0 && (
          <OrderPaginationControls
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            onShowMore={pagination.showMore}
            canShowMore={pagination.canShowMore}
            onPageChange={pagination.setPage}
          />
        )}
      </div>
    </StateProvider>
  );
};
