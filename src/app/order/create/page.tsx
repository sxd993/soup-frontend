import type { Metadata } from "next";
import { OrderCreatePageContent } from "./OrderCreatePageContent";


export const metadata: Metadata = {
  title: "Разместить заказ",
  description: "Студия уникальных проектов",
};

export default function OrderCreatePage() {
  return (
      <OrderCreatePageContent />
  )

}
