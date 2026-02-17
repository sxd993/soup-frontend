import { AxiosClient } from "@/shared/api";
import type { Order } from "../model/types/order.types";

export type CompanyOrdersStatus = "responded" | "archive";

export type GetCompanyOrdersParams = {
  status: CompanyOrdersStatus;
};

export const getCompanyOrders = async (
  params: GetCompanyOrdersParams,
): Promise<Order[]> => {
  const response = await AxiosClient.get<Order[]>("/profile/company/orders", {
    params: { status: params.status },
  });
  return response.data;
};
