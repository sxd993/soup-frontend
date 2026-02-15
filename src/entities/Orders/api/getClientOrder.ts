import { AxiosClient } from "@/shared/api";
import type { Order } from "../model/types/order.types";

export const getClientOrder = async (orderId: number): Promise<Order> => {
  const response = await AxiosClient.get<Order>(`/profile/client/orders/${orderId}`);
  return response.data;
};
