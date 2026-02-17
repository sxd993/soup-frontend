"use client";

import { useMemo } from "react";
import { useReviewsPagination } from "@/features/Profile/CompanyAccount/ReviewsSection/reviews-pagination/model/hooks/useReviewsPagination";
import { useCompanyOrderList } from "./useCompanyOrderList";

const PAGE_SIZE = 7;
const PAGE_PARAM = "page";

export const useCompanyOrderListPagination = (currentPageFromServer: number) => {
  const { orders, isEmpty, isLoading, isError } = useCompanyOrderList();

  const pagination = useReviewsPagination({
    totalItems: orders.length,
    pageSize: PAGE_SIZE,
    pageParam: PAGE_PARAM,
    currentPageFromServer,
  });

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
    totalOrders: orders.length,
    isEmpty,
    isLoading,
    isError,
    pagination,
  };
};
