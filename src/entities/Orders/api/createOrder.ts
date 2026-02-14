import { AxiosClient } from "@/shared/api";

export type CreateOrderPayload = {
  title: string;
  description?: string;
  location: string;
  category: string;
  budget: number;
  deadline?: string;
  hidePhone?: boolean;
};

export const createOrder = async (
  payload: CreateOrderPayload,
): Promise<void> => {
  await AxiosClient.post("/profile/client/orders", payload);
};
