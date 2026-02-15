"use client";

import { OrderDetailPage } from "@/widgets/Profile/ClientProfile/OrderDetailSection";

type OrderDetailPageClientProps = {
  orderId: number | null;
};

export function OrderDetailPageClient({ orderId }: OrderDetailPageClientProps) {
  return <OrderDetailPage orderId={orderId} />;
}
