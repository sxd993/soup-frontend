export type RespondToOrderPayload = {
  message?: string;
  priceFrom?: number;
  priceTo?: number;
  deadlineOffer?: string;
};

export type RespondToOrderResponse = {
  id: number;
  orderId: number;
  companyId: number;
  status: string;
  createdAt: string;
};
