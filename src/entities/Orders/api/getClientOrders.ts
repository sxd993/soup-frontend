import { AxiosClient } from "@/shared/api";
import type { Order } from "../model/types/order.types";

export type GetClientOrdersParams = {
  status: "active" | "completed" | "moderation";
};

export const getClientOrders = async (
  params: GetClientOrdersParams,
): Promise<Order[]> => {
  const response = await AxiosClient.get<Order[]>("/profile/client/orders", {
    params: { status: params.status },
  });
  return response.data;
};
