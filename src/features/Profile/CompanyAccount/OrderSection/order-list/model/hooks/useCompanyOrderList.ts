"use client";

import { useQuery } from "@tanstack/react-query";
import { getCompanyOrders } from "@/entities/Orders";
import { useCompanyOrderTabsStore } from "@/features/Profile/CompanyAccount/OrderSection/order-tabs";

const COMPANY_ORDERS_QUERY_KEY = ["company-orders"];

export const useCompanyOrderList = () => {
  const selectedStatus = useCompanyOrderTabsStore((state) => state.selectedStatus);
  const isArchive = selectedStatus === "archive";

  const query = useQuery({
    queryKey: [...COMPANY_ORDERS_QUERY_KEY, selectedStatus],
    queryFn: () => getCompanyOrders({ status: selectedStatus }),
    enabled: !isArchive,
    staleTime: 2 * 60 * 1000,
  });

  const orders = isArchive ? [] : (query.data ?? []);

  return {
    selectedStatus,
    orders,
    isEmpty: orders.length === 0,
    isLoading: isArchive ? false : query.isLoading,
    isError: isArchive ? false : query.isError,
  };
};
