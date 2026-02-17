import { AxiosClient } from "@/shared/api";

type CancelCompanyOrderResponseResult = {
  id: number;
  orderId: number;
  companyId: number;
  canceled: boolean;
};

export const cancelCompanyOrderResponse = async (
  orderId: number,
): Promise<CancelCompanyOrderResponseResult> => {
  const response = await AxiosClient.delete<CancelCompanyOrderResponseResult>(
    `/profile/company/orders/${orderId}/response`,
  );
  return response.data;
};
