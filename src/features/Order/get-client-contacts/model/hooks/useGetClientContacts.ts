"use client";

import { useQuery } from "@tanstack/react-query";
import { getClientContacts } from "../../api/getClientContacts";
import { ORDER_CLIENT_CONTACTS_QUERY_KEY } from "../constants/queryKeys";

export const useGetClientContacts = (
  orderId: number | null,
  enabled = true,
) => {
  return useQuery({
    queryKey: [...ORDER_CLIENT_CONTACTS_QUERY_KEY, orderId],
    queryFn: () => getClientContacts(orderId!),
    enabled: enabled && orderId != null,
    staleTime: 2 * 60 * 1000,
  });
};

