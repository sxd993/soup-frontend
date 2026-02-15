"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getClientOrder, CLIENT_ORDERS_QUERY_KEY } from "@/entities/Orders";
import {
  formatOrderPrice,
  formatOrderCreatedLabel,
  formatOrderDeadline,
  getOrderIcon,
} from "@/shared/lib/order";

export type OrderDetailTab = "details" | "responses";

export const useOrderDetailPage = (orderId: number | null) => {
  const [activeTab, setActiveTab] = useState<OrderDetailTab>("details");

  const query = useQuery({
    queryKey: [...CLIENT_ORDERS_QUERY_KEY, "detail", orderId],
    queryFn: () => getClientOrder(orderId!),
    enabled: orderId != null,
  });

  const order = query.data ?? null;
  const Icon = order ? getOrderIcon(order.category) : null;
  const createdLabel = order ? formatOrderCreatedLabel(order.createdAt) : "";
  const deadlineLabel = order ? formatOrderDeadline(order.deadline) : "";
  const priceText = order ? formatOrderPrice(order.price) : "";
  const responsesCount = 0;

  return {
    order,
    Icon,
    createdLabel,
    deadlineLabel,
    priceText,
    activeTab,
    setActiveTab,
    responsesCount,
    isLoading: query.isLoading,
    isError: query.isError,
    isEmpty: !query.isLoading && !query.isError && !order,
  };
};
