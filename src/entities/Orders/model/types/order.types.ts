export const OrderStatus = {
  ACTIVE: "active",
  COMPLETED: "completed",
  MODERATION: "moderation",
} as const;

export type OrderStatusType = (typeof OrderStatus)[keyof typeof OrderStatus];

export type Order = {
  id: number;
  clientId: number;
  title: string;
  description: string | null;
  region: string;
  price: number;
  category: string;
  status: string;
  deadline: string | null;
  createdAt: string;
  updatedAt: string;
};
