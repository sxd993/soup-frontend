"use client";

import { OrderCard } from "@/entities/Orders";
import { StateProvider } from "@/app/providers/State/StateProvider";
import { useOrderListPagination } from "../model/hooks/useOrderListPagination";
import { OrderListSkeleton } from "./OrderListSkeleton";
import { OrderPaginationControls } from "./OrderPaginationControls";

export const OrderList = () => {
  const {
    orders,
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
          {orders.map((order) => (
            <li key={order.id}>
              <OrderCard order={order} href={`/profile/client/orders/${order.id}`} />
            </li>
          ))}
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
