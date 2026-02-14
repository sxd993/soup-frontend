import { OrderStatus } from "@/entities/Orders/model/types/order.types";

export const formatOrderDate = (dateStr: string): string => {
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export const formatOrderPrice = (price: number): string =>
  `${price.toLocaleString("ru-RU")} ₽`;

export const getStatusButtonLabel = (status: string): string => {
  if (status === OrderStatus.COMPLETED) return "Вернуть в активные";
  if (status === OrderStatus.MODERATION) return "В активные";
  return "Завершить";
};
