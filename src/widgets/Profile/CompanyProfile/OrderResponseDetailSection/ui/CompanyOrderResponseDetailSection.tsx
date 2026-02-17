"use client";

import type { AxiosError } from "axios";
import { StateProvider } from "@/app/providers/State/StateProvider";
import { OrderCard, OrderDetails } from "@/entities/Orders";
import {
  CompanyResponseCard,
  useCancelCompanyOrderResponse,
  useGetCompanyOrderResponse,
} from "@/features/Order/company-order-response";
import { Button } from "@/shared/ui";
import { CompanyOrderResponseDetailSkeleton } from "./CompanyOrderResponseDetailSkeleton";
import { CompanyOrderResponseDetailTabs } from "./CompanyOrderResponseDetailTabs";
import { useCompanyOrderResponseDetailPage } from "../model/hooks/useCompanyOrderResponseDetailPage";

type CompanyOrderResponseDetailSectionProps = {
  orderId: string;
};

export const CompanyOrderResponseDetailSection = ({
  orderId,
}: CompanyOrderResponseDetailSectionProps) => {
  const page = useCompanyOrderResponseDetailPage(orderId);
  const responseQuery = useGetCompanyOrderResponse(
    page.orderId,
    page.orderId != null && page.activeTab === "response",
  );
  const { cancelResponse, isCancelPending } = useCancelCompanyOrderResponse(page.orderId);
  const responseErrorStatus = (responseQuery.error as AxiosError | null)?.response?.status;
  const isResponseNotFound = responseErrorStatus === 404;

  return (
    <StateProvider
      isLoading={page.isLoading}
      isError={page.isError}
      isEmpty={page.isEmpty}
      errorTitle="Не удалось загрузить заказ"
      loadingComponent={<CompanyOrderResponseDetailSkeleton />}
    >
      {page.order ? (
        <section className="flex flex-col gap-4 md:gap-5">
          <OrderCard order={page.order} href={null} />

          <CompanyOrderResponseDetailTabs
            activeTab={page.activeTab}
            setActiveTab={page.setActiveTab}
          />

          {page.activeTab === "details" ? <OrderDetails order={page.order} /> : null}

          {page.activeTab === "response" ? (
            <StateProvider
              isLoading={responseQuery.isLoading}
              isError={responseQuery.isError && !isResponseNotFound}
              isEmpty={isResponseNotFound || !responseQuery.data}
              errorTitle="Не удалось загрузить отклик"
            >
              {responseQuery.data ? (
                <>
                  <CompanyResponseCard response={responseQuery.data} />
                  <div className="flex justify-center pt-3 md:pt-4">
                    <Button
                      type="button"
                      className="w-full bg-[#535353]! text-sm text-white md:w-auto md:text-base"
                      onClick={cancelResponse}
                      disabled={isCancelPending}
                    >
                      Отменить отклик
                    </Button>
                  </div>
                </>
              ) : null}
            </StateProvider>
          ) : null}
        </section>
      ) : null}
    </StateProvider>
  );
};
