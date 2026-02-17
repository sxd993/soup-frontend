import { AxiosClient } from "@/shared/api";
import type { Order } from "../model/types/order.types";

export type GetOrdersParams = {
  status?: "active" | "completed" | "moderation";
  sort?: "new" | "no-responses";
};

export const getOrders = async (
  params: GetOrdersParams = {},
): Promise<Order[]> => {
  const requestParams: Record<string, string> = {
    status: params.status ?? "active",
  };
  if (params.sort && params.sort !== "new") {
    requestParams.sort = params.sort;
  }

  const response = await AxiosClient.get<Order[]>("/orders", {
    params: requestParams,
  });
  return response.data;
};
