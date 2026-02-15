import type { Metadata } from "next";
import { OrderFindDetailPageContent } from "./OrderFindDetailPageContent";

export const metadata: Metadata = {
  title: "Заказ",
  description: "Студия уникальных проектов",
};

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function OrderFindDetailPage({ params }: PageProps) {
  const { id } = await params;
  return <OrderFindDetailPageContent orderId={id} />;
}
