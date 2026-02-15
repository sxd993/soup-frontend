import type { Metadata } from "next";
import { OrderFindPageContent } from "./OrderFindPageContent";

export const metadata: Metadata = {
  title: "Найти заказ",
  description: "Студия уникальных проектов",
};

export default function OrderFindPage() {
  return <OrderFindPageContent />;
}