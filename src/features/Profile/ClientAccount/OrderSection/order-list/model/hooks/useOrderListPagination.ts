"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useOrderList, type OrderListItem } from "./useOrderList";
import { useReviewsPagination } from "@/features/Profile/CompanyAccount/ReviewsSection/reviews-pagination/model/hooks/useReviewsPagination";

const PAGE_SIZE = 7;
const PAGE_PARAM = "page";

function parsePage(value: string | null): number {
  if (value == null) return 1;
  const n = Number(value);
  return Number.isFinite(n) && n >= 1 ? n : 1;
}

export const useOrderListPagination = () => {
  const { orders, orderItems, isEmpty, isLoading, isError } = useOrderList();
  const searchParams = useSearchParams();
  const currentPageFromServer = parsePage(
    searchParams?.get(PAGE_PARAM) ?? null,
  );

  const pagination = useReviewsPagination({
    totalItems: orderItems.length,
    pageSize: PAGE_SIZE,
    pageParam: PAGE_PARAM,
    currentPageFromServer,
  });

  const pagedOrderItems: OrderListItem[] = useMemo(() => {
    if (pagination.isExpanded) {
      return orderItems.slice(0, pagination.expandedEndIndex);
    }
    return orderItems.slice(pagination.startIndex, pagination.endIndex);
  }, [
    orderItems,
    pagination.isExpanded,
    pagination.startIndex,
    pagination.endIndex,
    pagination.expandedEndIndex,
  ]);

  const pagedOrders = useMemo(() => {
    if (pagination.isExpanded) {
      return orders.slice(0, pagination.expandedEndIndex);
    }
    return orders.slice(pagination.startIndex, pagination.endIndex);
  }, [
    orders,
    pagination.isExpanded,
    pagination.startIndex,
    pagination.endIndex,
    pagination.expandedEndIndex,
  ]);

  return {
    orders: pagedOrders,
    orderItems: pagedOrderItems,
    totalOrders: orderItems.length,
    isEmpty,
    isLoading,
    isError,
    pagination,
  };
};
