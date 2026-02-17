import type { Metadata } from "next";
import { OrderFindPageContent } from "./OrderFindPageContent";
import { Suspense } from "react";
import { LoadingState } from "@/shared/ui";

export const metadata: Metadata = {
  title: "Найти заказ",
  description: "Студия уникальных проектов",
};

export default function OrderFindPage() {
  return (
  <Suspense fallback={<LoadingState />}>
    <OrderFindPageContent />
  </Suspense>
  )
}