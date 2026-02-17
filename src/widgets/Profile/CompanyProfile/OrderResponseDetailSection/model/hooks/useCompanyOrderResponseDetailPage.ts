"use client";

import { useState } from "react";
import type { AxiosError } from "axios";
import { useGetOrderDetails } from "@/features/Order/get-order-details";
import type { CompanyOrderDetailTab } from "../const/companyOrderDetailTabs";

export const useCompanyOrderResponseDetailPage = (orderId: string) => {
  const [activeTab, setActiveTab] = useState<CompanyOrderDetailTab>("details");

  const parsedOrderId = Number(orderId);
  const normalizedOrderId =
    Number.isInteger(parsedOrderId) && parsedOrderId > 0 ? parsedOrderId : null;

  const orderQuery = useGetOrderDetails(normalizedOrderId, normalizedOrderId != null);

  const orderErrorStatus = (orderQuery.error as AxiosError | null)?.response?.status;
  const isOrderNotFound = orderErrorStatus === 404;

  const isLoading = normalizedOrderId != null && orderQuery.isLoading;
  const isError = normalizedOrderId != null && orderQuery.isError && !isOrderNotFound;
  const isEmpty =
    normalizedOrderId == null ||
    (!isLoading && !isError && (isOrderNotFound || !orderQuery.data));

  return {
    orderId: normalizedOrderId,
    order: orderQuery.data ?? null,
    activeTab,
    setActiveTab,
    isLoading,
    isError,
    isEmpty,
  };
};
