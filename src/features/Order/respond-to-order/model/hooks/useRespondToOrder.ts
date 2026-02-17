"use client";

import { useState } from "react";
import type { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { showErrorToast, showSuccessToast } from "@/shared/ui";
import { getErrorMessage } from "@/shared/lib";
import { ORDER_DETAILS_QUERY_KEY } from "@/features/Order/get-order-details";
import { COMPANY_ORDER_RESPONSE_QUERY_KEY } from "@/features/Order/company-order-response";
import { respondToOrder } from "../../api/respondToOrder";
import type { RespondToOrderPayload } from "../types/respondToOrder.types";

const COMPANY_ORDERS_QUERY_KEY = ["company-orders"] as const;

export const useRespondToOrder = (orderId: number | null) => {
  const queryClient = useQueryClient();
  const [isAlreadyResponded, setIsAlreadyResponded] = useState(false);

  const mutation = useMutation({
    mutationFn: (payload: RespondToOrderPayload = {}) => {
      if (orderId == null) return Promise.reject(new Error("No order id"));
      return respondToOrder(orderId, payload);
    },
  });

  const invalidateRelatedQueries = async () => {
    if (orderId == null) return;

    await Promise.all([
      queryClient.invalidateQueries({ queryKey: [...ORDER_DETAILS_QUERY_KEY, orderId] }),
      queryClient.invalidateQueries({
        queryKey: [...COMPANY_ORDER_RESPONSE_QUERY_KEY, orderId],
      }),
      queryClient.invalidateQueries({ queryKey: COMPANY_ORDERS_QUERY_KEY }),
    ]);
  };

  const submitRespond = async (
    payload: RespondToOrderPayload = {},
  ): Promise<"success" | "already" | "error"> => {
    try {
      await mutation.mutateAsync(payload);
      setIsAlreadyResponded(true);
      await invalidateRelatedQueries();
      
      return "success";
    } catch (error) {
      const status = (error as AxiosError | null)?.response?.status;
      if (status === 409) {
        setIsAlreadyResponded(true);
        await invalidateRelatedQueries();
        showSuccessToast("Вы уже откликнулись");
        return "already";
      }
      showErrorToast(
        "Не удалось отправить отклик",
        getErrorMessage(error, "Попробуйте еще раз."),
      );
      return "error";
    }
  };

  return {
    submitRespond,
    isRespondPending: mutation.isPending,
    isAlreadyResponded,
  };
};
