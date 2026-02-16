"use client";

import { StateProvider } from "@/app/providers/State/StateProvider";
import { useOrderFindDetailPage } from "@/features/Order/get-order-details/ui/useOrderFindDetailPage";
import {
  RespondToOrderModal,
  useRespondToOrder,
  useRespondToOrderModalStore,
} from "@/features/Order/respond-to-order";
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
  const respond = useRespondToOrder(page.order?.id ?? null);
  const openRespondModal = useRespondToOrderModalStore((state) => state.openModal);
  const isResponded = Boolean(page.order?.isResponded || respond.isAlreadyResponded);

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
        <>
          <OrderFindDetailPage
            order={page.order}
            relatedOrders={page.relatedOrders}
            isResponded={isResponded}
            onRespond={openRespondModal}
            isRespondPending={respond.isRespondPending}
          />
          <RespondToOrderModal orderId={page.order.id} />
        </>
      )}
    </StateProvider>
  );
}
