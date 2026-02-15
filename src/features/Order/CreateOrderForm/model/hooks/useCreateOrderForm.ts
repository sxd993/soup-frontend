import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { showErrorToast, showSuccessToast } from "@/shared/ui";
import { getErrorMessage, deadlineToISO } from "@/shared/lib";
import {
  createOrder,
  CLIENT_ORDERS_QUERY_KEY,
  savePendingOrder,
  getPendingOrder,
  clearPendingOrder,
  hadPendingOrderRedirect,
} from "@/entities/Orders";
import { useSession } from "@/entities/Session";
import type { CreateOrderFormValues } from "../types/types";
import { defaultCreateOrderFormValues } from "../types/types";
import { useOrderCategories } from "./useOrderCategories";

const REGISTER_URL = "/auth/register";
const ORDER_CREATE_RETURN_URL = "/order/create";
/** Создавать заказ из черновика только если пользователь пришёл по ссылке после формы (не просто зарегистрировался). */
const FROM_PENDING_ORDER_PARAM = "fromPendingOrder";

export const useCreateOrderForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();
  const { data: session, isLoading: isSessionLoading } = useSession();
  const { isLoading, isError } = useOrderCategories();
  const formMethods = useForm<CreateOrderFormValues>({
    defaultValues: defaultCreateOrderFormValues,
    mode: "onChange",
  });

  const pendingOrderProcessedRef = useRef(false);

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

  useEffect(() => {
    if (session?.user?.role !== "client") return;

    const cameFromPendingFlow = searchParams?.get(FROM_PENDING_ORDER_PARAM) === "1";

    if (!cameFromPendingFlow) {
      clearPendingOrder();
      return;
    }

    if (!hadPendingOrderRedirect()) return;

    if (pendingOrderProcessedRef.current) return;
    const pending = getPendingOrder();
    if (!pending) return;

    pendingOrderProcessedRef.current = true;
    clearPendingOrder();
    mutation.mutate(pending);
    router.replace("/order/create");
  }, [session?.user?.role, searchParams]);

  const handleSubmit = formMethods.handleSubmit((values) => {
    const budget = Number(values.budget) || 0;
    const payload = {
      title: values.title.trim(),
      description: values.description?.trim() || undefined,
      location: values.location.trim(),
      category: values.categoryId.trim(),
      budget,
      deadline: deadlineToISO(values.deadline),
      hidePhone: values.hidePhone,
      fileUrls:
        values.fileUrls.length > 0
          ? values.fileUrls.map((f) => f.url)
          : undefined,
    };

    if (!isSessionLoading && !session?.user) {
      savePendingOrder(payload);
      const returnUrl = encodeURIComponent(
        `${ORDER_CREATE_RETURN_URL}?${FROM_PENDING_ORDER_PARAM}=1`
      );
      router.push(`${REGISTER_URL}?returnUrl=${returnUrl}`);
      return;
    }

    mutation.mutate(payload);
  });

  return {
    formMethods,
    handleSubmit,
    isLoading,
    isError,
    isPending: mutation.isPending,
  }
};
