"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import {
  cancelCompanyOrderResponse,
  getCompanyOrders,
} from "@/entities/Orders";
import { showErrorToast, showSuccessToast } from "@/shared/ui";
import { getErrorMessage } from "@/shared/lib";
import { COMPANY_ORDER_RESPONSE_QUERY_KEY } from "../constants/queryKeys";
import { ORDER_DETAILS_QUERY_KEY } from "@/features/Order/get-order-details";

const COMPANY_ORDERS_QUERY_KEY = ["company-orders"];

export const useCancelCompanyOrderResponse = (orderId: number | null) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => {
      if (orderId == null) return Promise.reject(new Error("No order id"));
      return cancelCompanyOrderResponse(orderId);
    },
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: COMPANY_ORDERS_QUERY_KEY }),
        queryClient.invalidateQueries({
          queryKey: [...COMPANY_ORDER_RESPONSE_QUERY_KEY, orderId],
        }),
        orderId != null
          ? queryClient.invalidateQueries({
              queryKey: [...ORDER_DETAILS_QUERY_KEY, orderId],
            })
          : Promise.resolve(),
      ]);

      await queryClient.prefetchQuery({
        queryKey: [...COMPANY_ORDERS_QUERY_KEY, "responded"],
        queryFn: () => getCompanyOrders({ status: "responded" }),
      });
      
      router.push("/profile/company/orders");
      showSuccessToast("Отклик отменен");

    },
    onError: (error: Error) => {
      showErrorToast(
        "Не удалось отменить отклик",
        getErrorMessage(error, "Попробуйте еще раз."),
      );
    },
  });

  return {
    cancelResponse: () => mutation.mutate(),
    isCancelPending: mutation.isPending,
  };
};
