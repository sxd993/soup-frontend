import { AxiosClient } from "@/shared/api";
import type {
  RespondToOrderPayload,
  RespondToOrderResponse,
} from "../model/types/respondToOrder.types";

export const respondToOrder = async (
  orderId: number,
  payload: RespondToOrderPayload = {},
): Promise<RespondToOrderResponse> => {
  const response = await AxiosClient.post<RespondToOrderResponse>(
    `/orders/${orderId}/respond`,
    payload,
  );
  return response.data;
};

