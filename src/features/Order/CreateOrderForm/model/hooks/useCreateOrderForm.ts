import { useForm } from "react-hook-form";
import type { CreateOrderFormValues } from "../types/types";
import { defaultCreateOrderFormValues } from "../types/types";
import { useOrderServiceBadges } from "./useOrderServiceBadges";

export const useCreateOrderForm = () => {
  const { badges, isLoading, isError } = useOrderServiceBadges();
  const formMethods = useForm<CreateOrderFormValues>({
    defaultValues: defaultCreateOrderFormValues,
    mode: "onChange",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return {
    formMethods,
    handleSubmit,
    badges,
    isLoading,
    isError,
  };
};
