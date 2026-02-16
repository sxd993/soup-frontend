import { AxiosClient } from "@/shared/api";
import type { Order } from "@/entities/Orders/model/types/order.types";

export const getOrderDetails = async (orderId: number): Promise<Order> => {
  const response = await AxiosClient.get<Order>(`/orders/${orderId}`);
  return response.data;
};

