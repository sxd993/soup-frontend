import { AxiosClient } from "@/shared/api";
import type { Order } from "../model/types/order.types";

export type GetOrdersParams = {
  status?: "active" | "completed" | "moderation";
};

export const getOrders = async (
  params: GetOrdersParams = {},
): Promise<Order[]> => {
  const response = await AxiosClient.get<Order[]>("/orders", {
    params: { status: params.status ?? "active" },
  });
  return response.data;
};
