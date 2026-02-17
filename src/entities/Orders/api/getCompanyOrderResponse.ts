import { AxiosClient } from "@/shared/api";

export type CompanyOrderResponse = {
  id: number;
  orderId: number;
  companyId: number;
  companyName: string | null;
  companyLogoUrl: string | null;
  rating: number;
  reviewsCount: number;
  message: string | null;
  priceFrom: number | null;
  priceTo: number | null;
  status: string;
  createdAt: string;
};

export const getCompanyOrderResponse = async (
  orderId: number,
): Promise<CompanyOrderResponse> => {
  const response = await AxiosClient.get<CompanyOrderResponse>(
    `/profile/company/orders/${orderId}/response`,
  );
  return response.data;
};
