"use client";

import { useQuery } from "@tanstack/react-query";
import { getOrderDetails } from "../../api/getOrderDetails";
import { ORDER_DETAILS_QUERY_KEY } from "../constants/queryKeys";

export const useGetOrderDetails = (
  orderId: number | null,
  enabled = true,
) => {
  return useQuery({
    queryKey: [...ORDER_DETAILS_QUERY_KEY, orderId],
    queryFn: () => getOrderDetails(orderId!),
    enabled: enabled && orderId != null,
    staleTime: 2 * 60 * 1000,
  });
};

