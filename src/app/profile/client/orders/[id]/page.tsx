import { OrderDetailPageClient } from "./OrderDetailPageClient";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function OrderDetailRoute({ params }: PageProps) {
  const { id } = await params;
  const orderId = id ? parseInt(id, 10) : null;
  const validId = Number.isFinite(orderId) ? orderId : null;

  return <OrderDetailPageClient orderId={validId} />;
}
