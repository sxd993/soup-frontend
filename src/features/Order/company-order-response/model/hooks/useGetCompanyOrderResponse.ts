"use client";

import { useQuery } from "@tanstack/react-query";
import { getCompanyOrderResponse } from "@/entities/Orders";
import { COMPANY_ORDER_RESPONSE_QUERY_KEY } from "../constants/queryKeys";

export const useGetCompanyOrderResponse = (
  orderId: number | null,
  enabled = true,
) =>
  useQuery({
    queryKey: [...COMPANY_ORDER_RESPONSE_QUERY_KEY, orderId],
    queryFn: () => getCompanyOrderResponse(orderId!),
    enabled: enabled && orderId != null,
  });
