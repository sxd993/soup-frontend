"use client";

import type { ComponentType } from "react";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { getClientOrders } from "@/entities/Orders/api/getClientOrders";
import { CLIENT_ORDERS_QUERY_KEY } from "@/entities/Orders/model/constants";
import { useOrderTabsStore } from "../../../order-tabs/model/store/useOrderTabsStore";
import { formatOrderPrice, formatOrderCreatedLabel } from "../lib/formatOrder";
import { getOrderIcon } from "../lib/getOrderIcon";

export type OrderStatusFilter = "active" | "completed" | "moderation";

export type OrderListItem = {
  id: number;
  title: string;
  category: string;
  region: string;
  createdLabel: string;
  priceText: string;
  Icon: ComponentType<{ isActive?: boolean }>;
};

export const useOrderList = () => {
  const statusFilter = useOrderTabsStore(
    (state) => state.selectedStatus,
  ) as OrderStatusFilter;

  const query = useQuery({
    queryKey: [...CLIENT_ORDERS_QUERY_KEY, statusFilter],
    queryFn: () => getClientOrders({ status: statusFilter }),
  });

  const orders = query.data ?? [];
  const orderItems: OrderListItem[] = useMemo(
    () =>
      orders.map((order) => ({
        id: order.id,
        title: order.title,
        category: order.category,
        region: order.region,
        createdLabel: formatOrderCreatedLabel(order.createdAt),
        priceText: formatOrderPrice(order.price),
        Icon: getOrderIcon(order.category),
      })),
    [orders],
  );

  return {
    orderItems,
    isEmpty: orderItems.length === 0,
    isLoading: query.isLoading,
    isError: query.isError,
  };
};
