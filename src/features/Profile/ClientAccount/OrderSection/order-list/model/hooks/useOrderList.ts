"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { showErrorToast, showSuccessToast } from "@/shared/ui";
import { getErrorMessage } from "@/shared/lib";
import { getClientOrders } from "@/entities/Orders/api/getClientOrders";
import { updateOrderStatus } from "@/entities/Orders/api/updateOrderStatus";
import { OrderStatus } from "@/entities/Orders/model/types/order.types";
import { CLIENT_ORDERS_QUERY_KEY } from "@/entities/Orders/model/constants";
import { useOrderTabsStore } from "../../../model/store/useOrderTabsStore";
import {
  formatOrderDate,
  formatOrderPrice,
  getStatusButtonLabel,
} from "../lib/formatOrder";

export type OrderStatusFilter = "active" | "completed" | "moderation";

export type OrderListItem = {
  id: number;
  title: string;
  region: string;
  dateText: string;
  priceText: string;
  statusButtonLabel: string;
  onStatusClick: () => void;
};

export const useOrderList = () => {
  const queryClient = useQueryClient();
  const statusFilter = useOrderTabsStore(
    (state) => state.selectedStatus,
  ) as OrderStatusFilter;

  const query = useQuery({
    queryKey: [...CLIENT_ORDERS_QUERY_KEY, statusFilter],
    queryFn: () => getClientOrders({ status: statusFilter }),
  });

  const updateStatusMutation = useMutation({
    mutationKey: ["update-order-status"],
    mutationFn: ({ orderId, status }: { orderId: number; status: string }) =>
      updateOrderStatus(orderId, status),
    onSuccess: (_, variables) => {
      const newStatus = variables.status;
      showSuccessToast(
        newStatus === OrderStatus.COMPLETED
          ? "Заказ завершён"
          : "Заказ в активных",
        "",
      );
      queryClient.invalidateQueries({ queryKey: CLIENT_ORDERS_QUERY_KEY });
    },
    onError: (error) => {
      showErrorToast(
        "Не удалось изменить статус",
        getErrorMessage(error, "Попробуйте ещё раз."),
      );
    },
  });

  const orders = query.data ?? [];
  const orderItems: OrderListItem[] = useMemo(
    () =>
      orders.map((order) => ({
        id: order.id,
        title: order.title,
        region: order.region,
        dateText: formatOrderDate(order.createdAt),
        priceText: formatOrderPrice(order.price),
        statusButtonLabel: getStatusButtonLabel(order.status),
        onStatusClick: () =>
          updateStatusMutation.mutate({
            orderId: order.id,
            status:
              order.status === OrderStatus.COMPLETED ||
              order.status === OrderStatus.MODERATION
                ? OrderStatus.ACTIVE
                : OrderStatus.COMPLETED,
          }),
      })),
    [orders, updateStatusMutation.mutate],
  );

  return {
    orderItems,
    isEmpty: orderItems.length === 0,
    isLoading: query.isLoading,
    isError: query.isError,
    isUpdating: updateStatusMutation.isPending,
  };
};
