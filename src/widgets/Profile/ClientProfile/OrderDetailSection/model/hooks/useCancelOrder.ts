"use client";

import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  updateOrderStatus,
  CLIENT_ORDERS_QUERY_KEY,
  OrderStatus,
} from "@/entities/Orders";
import { showErrorToast, showSuccessToast } from "@/shared/ui";
import { getErrorMessage } from "@/shared/lib";
import { useOrderTabsStore } from "@/features/Profile/ClientAccount/OrderSection";

export const useCancelOrder = (orderId: number | null) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const setSelectedStatus = useOrderTabsStore((s) => s.setSelectedStatus);

  const mutation = useMutation({
    mutationFn: () => {
      if (orderId == null) return Promise.reject(new Error("No order id"));
      return updateOrderStatus(orderId, OrderStatus.COMPLETED);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CLIENT_ORDERS_QUERY_KEY });
      setSelectedStatus("completed");
      showSuccessToast("Заказ отменён", "Заказ перенесён в завершённые.");
      router.push("/profile/client/orders");
    },
    onError: (error: Error) => {
      showErrorToast(
        "Не удалось отменить заказ",
        getErrorMessage(error, "Попробуйте ещё раз."),
      );
    },
  });

  return {
    cancelOrder: () => mutation.mutate(),
    isCancelPending: mutation.isPending,
  };
};
