import { AxiosClient } from "@/shared/api";
import type { Order } from "../model/types/order.types";

export const updateOrderStatus = async (
  orderId: number,
  status: string,
): Promise<Order> => {
  const response = await AxiosClient.patch<Order>(
    `/profile/client/orders/${orderId}`,
    { status },
  );
  return response.data;
};
