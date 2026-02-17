"use client";

import { StateProvider } from "@/app/providers/State/StateProvider";
import { OrderCard } from "@/entities/Orders";
import { useCompanyOrderListPagination } from "../model/hooks/useCompanyOrderListPagination";
import { CompanyOrderListSkeleton } from "./CompanyOrderListSkeleton";
import { CompanyOrderPaginationControls } from "./CompanyOrderPaginationControls";

type CompanyOrderListProps = {
  currentPage: number;
};

export const CompanyOrderList = ({ currentPage }: CompanyOrderListProps) => {
  const { orders, isEmpty, isLoading, isError, totalOrders, pagination } =
    useCompanyOrderListPagination(currentPage);

  return (
    <StateProvider
      isLoading={isLoading}
      isError={isError}
      isEmpty={isEmpty}
      errorTitle="Не удалось загрузить заказы"
      loadingComponent={<CompanyOrderListSkeleton />}
    >
      <div className="flex flex-col gap-3 md:gap-5">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} href={`/profile/company/orders/${order.id}`} />
        ))}
        {totalOrders > 0 ? (
          <CompanyOrderPaginationControls
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            onShowMore={pagination.showMore}
            canShowMore={pagination.canShowMore}
            onPageChange={pagination.setPage}
          />
        ) : null}
      </div>
    </StateProvider>
  );
};
