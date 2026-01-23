"use client"

import { StateProvider } from "@/app/providers/State/StateProvider"
import { CompanyOrdersEmpty } from "@/features/Profile/CompanyAccount/OrdersSection/get-company-orders/ui/CompanyOrdersEmpty"
import { CompanyOrdersSkeleton } from "@/features/Profile/CompanyAccount/OrdersSection/get-company-orders/ui/CompanyOrdersSkeleton"
import { OrdersPaginationControls } from "@/features/Profile/CompanyAccount/OrdersSection/orders-pagination/ui/OrdersPaginationControls"
import { useCompanyOrdersList } from "@/features/Profile/CompanyAccount/OrdersSection/orders-pagination/model/hooks/useCompanyOrdersList"

export const OrdersCompanyList = () => {
    const ordersList = useCompanyOrdersList(7)

    return (
        <StateProvider
            isLoading={ordersList.isLoading}
            isError={ordersList.isError}
            isEmpty={ordersList.isEmpty}
            loadingComponent={<CompanyOrdersSkeleton />}
            emptyComponent={<CompanyOrdersEmpty />}
            errorMessage="Не удалось загрузить заказы"
        >
            <div className="flex flex-col gap-6">
                {ordersList.orders.map((order) => (
                    <article key={order.id} className="rounded-[20px] bg-white p-5">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                            <div className="flex items-center gap-4">
                                {order.companyLogoUrl ? (
                                    <img
                                        src={order.companyLogoUrl}
                                        alt={order.title}
                                        className="h-12 w-12 rounded-full object-cover"
                                    />
                                ) : (
                                    <div className="h-12 w-12 rounded-full bg-[#f6f1ec]" />
                                )}
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-[20px] font-bold leading-[120%] text-secondary">
                                        {order.title}
                                    </h3>
                                    <span className="text-[14px] font-normal leading-[130%] text-accent-septenary">
                                        {order.region}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 md:items-end">
                                <span className="text-[16px] font-semibold text-secondary">
                                    {order.priceLabel}
                                </span>
                                <span className="text-[14px] font-normal text-accent-septenary">
                                    {order.createdAtLabel}
                                </span>
                            </div>
                        </div>
                        {order.category && (
                            <div className="mt-4 text-[14px] text-accent-septenary">
                                {order.category}
                            </div>
                        )}
                    </article>
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
