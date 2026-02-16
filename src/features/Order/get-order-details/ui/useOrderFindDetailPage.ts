"use client";

import { useMemo } from "react";
import type { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "@/entities/Session";
import { getOrders } from "@/entities/Orders/api/getOrders";
import { ORDERS_QUERY_KEY } from "@/entities/Orders/model/constants/constants";
import { useGetOrderDetails } from "@/features/Order/get-order-details";

export type OrderFindDetailEmptyType =
  | "access-denied"
  | "not-found"
  | "invalid-id"
  | null;

type AccessDeniedMeta = {
  href: string;
  buttonLabel: string;
};

export const useOrderFindDetailPage = (orderId: string) => {
  const parsedOrderId = Number(orderId);
  const normalizedOrderId =
    Number.isInteger(parsedOrderId) && parsedOrderId > 0 ? parsedOrderId : null;

  const { data: session, isLoading: isSessionLoading } = useSession();
  const isCompany = session?.user?.role === "company";
  const isAccessDenied = !isSessionLoading && (!session?.user || !isCompany);
  const canLoadOrder = normalizedOrderId != null && isCompany;

  const orderQuery = useGetOrderDetails(normalizedOrderId, canLoadOrder);
  const relatedOrdersQuery = useQuery({
    queryKey: [...ORDERS_QUERY_KEY, "related", normalizedOrderId],
    queryFn: () => getOrders({ status: "active" }),
    enabled: canLoadOrder,
    staleTime: 2 * 60 * 1000,
  });

  const orderErrorStatus = (orderQuery.error as AxiosError | null)?.response?.status;
  const isOrderNotFound = orderErrorStatus === 404;

  const isLoading = isSessionLoading || (canLoadOrder && orderQuery.isLoading);
  const isError = canLoadOrder && orderQuery.isError && !isOrderNotFound;

  const emptyType: OrderFindDetailEmptyType = useMemo(() => {
    if (isLoading) return null;
    if (isAccessDenied) return "access-denied";
    if (normalizedOrderId == null) return "invalid-id";
    if (isOrderNotFound) return "not-found";
    if (!isError && canLoadOrder && !orderQuery.data) return "not-found";
    return null;
  }, [
    canLoadOrder,
    isAccessDenied,
    isError,
    isLoading,
    isOrderNotFound,
    normalizedOrderId,
    orderQuery.data,
  ]);

  const relatedOrders = useMemo(() => {
    if (normalizedOrderId == null) return [];
    return (relatedOrdersQuery.data ?? [])
      .filter((item) => item.id !== normalizedOrderId)
      .slice(0, 3);
  }, [normalizedOrderId, relatedOrdersQuery.data]);

  const accessDeniedMeta: AccessDeniedMeta = !session?.user
    ? { href: "/auth/login", buttonLabel: "Войти" }
    : { href: "/profile/client/account", buttonLabel: "В личный кабинет" };

  return {
    order: orderQuery.data ?? null,
    relatedOrders,
    accessDeniedMeta,
    emptyType,
    isLoading,
    isError,
    isEmpty: emptyType != null,
  };
};
