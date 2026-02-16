"use client";

import { StateProvider } from "@/app/providers/State/StateProvider";
import { useOrderFindDetailPage } from "@/features/Order/get-order-details/ui/useOrderFindDetailPage";
import { OrderFindDetailPage } from "./OrderFindDetailPage";
import { OrderFindDetailPageSkeleton } from "./skeletons/OrderFindDetailPageSkeleton";
import { OrderFindDetailAccessDenied } from "./states/OrderFindDetailAccessDenied";
import { OrderFindDetailNotFound } from "./states/OrderFindDetailNotFound";

type OrderFindDetailPageContentProps = {
  orderId: string;
};

export function OrderFindDetailPageContent({
  orderId,
}: OrderFindDetailPageContentProps) {
  const page = useOrderFindDetailPage(orderId);

  const emptyComponent =
    page.emptyType === "access-denied" ? (
      <OrderFindDetailAccessDenied
        href={page.accessDeniedMeta.href}
        buttonLabel={page.accessDeniedMeta.buttonLabel}
      />
    ) : page.emptyType === "invalid-id" ? (
      <OrderFindDetailNotFound message="Некорректный идентификатор заказа" />
    ) : (
      <OrderFindDetailNotFound message="Заказ не найден" />
    );

  return (
    <StateProvider
      isLoading={page.isLoading}
      isError={page.isError}
      isEmpty={page.isEmpty}
      errorTitle="Не удалось загрузить заказ"
      loadingComponent={<OrderFindDetailPageSkeleton />}
      emptyComponent={emptyComponent}
    >
      {page.order && (
        <OrderFindDetailPage order={page.order} relatedOrders={page.relatedOrders} />
      )}
    </StateProvider>
  );
}
