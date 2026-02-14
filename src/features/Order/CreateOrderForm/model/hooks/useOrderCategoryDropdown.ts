import { useFormContext } from "react-hook-form";
import { useDropdown } from "@/shared/hooks";
import type { CreateOrderFormValues } from "../types/types";
import { useOrderServiceBadges } from "./useOrderServiceBadges";

export const useOrderCategoryDropdown = () => {
  const { control } = useFormContext<CreateOrderFormValues>();
  const { badges } = useOrderServiceBadges();
  const dropdown = useDropdown();
  return { control, badges, ...dropdown };
};
