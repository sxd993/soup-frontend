"use client"

import { StateProvider } from "@/app/providers/State/StateProvider"
import { OrdersCard } from "@/entities/Orders/ui/OrdersCard"
import { CompanyOrdersSkeleton } from "./CompanyOrdersSkeleton"
import { CompanyOrdersEmpty } from "./CompanyOrdersEmpty"
import { OrdersPaginationControls, useCompanyOrdersList } from "../../orders-pagination"

export const OrdersCompanyList = () => {
    const ordersList = useCompanyOrdersList()

    return (
        <StateProvider
            isLoading={ordersList.isLoading}
            isError={ordersList.isError}
            isEmpty={ordersList.isEmpty}
            loadingComponent={<CompanyOrdersSkeleton />}
            emptyComponent={<CompanyOrdersEmpty />}
            errorTitle="Не удалось загрузить заказы"
        >
            <div className="flex flex-col gap-5">
                {ordersList.orders.map((order) => (
                    <OrdersCard
                        key={order.id}
                        order={order}
                    />
                ))}
            </div>

            {ordersList.shouldShowPagination && (
                <div className="mt-6">
                    <OrdersPaginationControls
                        currentPage={ordersList.pagination.currentPage}
                        totalPages={ordersList.pagination.totalPages}
                        onShowMore={ordersList.pagination.showMore}
                        canShowMore={ordersList.pagination.canShowMore}
                        onPageChange={ordersList.pagination.setPage}
                    />
                </div>
            )}
        </StateProvider>
    )
}
