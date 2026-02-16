import { AxiosClient } from "@/shared/api";
import type { ClientContactsResponse } from "../model/types/clientContacts.types";

export const getClientContacts = async (
  orderId: number,
): Promise<ClientContactsResponse> => {
  const response = await AxiosClient.get<ClientContactsResponse>(
    `/orders/${orderId}/client-contacts`,
  );
  return response.data;
};

