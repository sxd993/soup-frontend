import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { showErrorToast, showSuccessToast } from "@/shared/ui";
import { getErrorMessage, deadlineToISO } from "@/shared/lib";
import { createOrder } from "@/entities/Orders/api/createOrder";
import { CLIENT_ORDERS_QUERY_KEY } from "@/entities/Orders/model/constants";
import type { CreateOrderFormValues } from "../types/types";
import { defaultCreateOrderFormValues } from "../types/types";
import { useOrderServiceBadges } from "./useOrderServiceBadges";

export const useCreateOrderForm = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { badges, isLoading, isError } = useOrderServiceBadges();
  const formMethods = useForm<CreateOrderFormValues>({
    defaultValues: defaultCreateOrderFormValues,
    mode: "onChange",
  });

  const mutation = useMutation({
    mutationKey: ["create-order"],
    mutationFn: createOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CLIENT_ORDERS_QUERY_KEY });
      showSuccessToast("Заказ создан", "Ваш заказ успешно отправлен.");
      formMethods.reset(defaultCreateOrderFormValues);
      router.push("/profile/client/orders");
    },
    onError: (error) => {
      showErrorToast(
        "Не удалось создать заказ",
        getErrorMessage(error, "Попробуйте ещё раз.")
      );
    },
  });

  const handleSubmit = formMethods.handleSubmit((values) => {
    const budget = Number(values.budget) || 0;
    mutation.mutate({
      title: values.title.trim(),
      description: values.description?.trim() || undefined,
      location: values.location.trim(),
      category: values.categoryId.trim(),
      budget,
      deadline: deadlineToISO(values.deadline),
      hidePhone: values.hidePhone,
    });
  });

  return {
    formMethods,
    handleSubmit,
    badges,
    isLoading,
    isError,
    isPending: mutation.isPending,
  };
};
