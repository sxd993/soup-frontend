"use client";

import { StateProvider } from "@/app/providers/State/StateProvider";
import {
  OrderCardHeader,
  OrderDetails,
  OrderResponses,
} from "@/features/Profile/ClientAccount/OrderSection";
import { OrderStatus } from "@/entities/Orders";
import { BlackButton } from "@/shared/ui";
import { useCancelOrder } from "../model/hooks/useCancelOrder";
import { useOrderDetailPage } from "../model/hooks/useOrderDetailPage";
import { OrderDetailSkeleton } from "./OrderDetailSkeleton";
import { OrderDetailTabs } from "./OrderDetailTabs";

type OrderDetailPageProps = {
  orderId: number | null;
};

export const OrderDetailPage = ({ orderId }: OrderDetailPageProps) => {
  const page = useOrderDetailPage(orderId);
  const { cancelOrder, isCancelPending } = useCancelOrder(page.order?.id ?? null);
  const Icon = page.Icon;

  return (
    <StateProvider
      isLoading={page.isLoading}
      isError={page.isError}
      isEmpty={page.isEmpty}
      errorTitle="Не удалось загрузить заказ"
      loadingComponent={<OrderDetailSkeleton />}
    >
      {page.order && Icon && (
        <div className="flex flex-col gap-4">
          <OrderCardHeader
            Icon={Icon}
            title={page.order.title}
            region={page.order.region}
            priceText={page.priceText}
            createdLabel={page.createdLabel}
            titleAs="h1"
            className="flex flex-col gap-3 rounded-[20px] bg-white p-5"
          />

          <OrderDetailTabs
            activeTab={page.activeTab}
            setActiveTab={page.setActiveTab}
            responsesCount={page.responsesCount}
          />

          {page.activeTab === "details" && (
            <>
              <OrderDetails order={page.order} />
              {page.order.status !== OrderStatus.COMPLETED && (
                <div className="flex justify-center pt-10">
                  <BlackButton
                    type="button"
                    onClick={cancelOrder}
                    disabled={isCancelPending}
                  >
                    Отменить заказ
                  </BlackButton>
                </div>
              )}
            </>
          )}

          {page.activeTab === "responses" && (
            <OrderResponses orderId={page.order.id} />
          )}
        </div>
      )}
    </StateProvider>
  );
};
