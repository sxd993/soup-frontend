"use client"

import { OrdersCompanyTabs } from "../../../../features/Profile/CompanyAccount/OrdersSection/orders-tabs/ui/OrdersCompanyTabs"
import { SectionTitle } from "@/shared/ui"
import { OrdersCompanyList } from "@/features/Profile/CompanyAccount/OrdersSection/get-company-orders/ui/OrdersCompanyList"
import { useOrdersCompanyTabs } from "@/features/Profile/CompanyAccount/OrdersSection/orders-tabs/model/hooks/useOrdersCompanyTabs"

export const OrdersCompanySection = () => {
    return (
        <section className="flex flex-col gap-12 min-h-screen">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-7">
                    <SectionTitle
                        className="font-semibold text-[28px]! leading-[110%]!"
                        title='Заказы'
                    />
                </div>
                {/* Переключение вкладок */}
                <OrdersCompanyTabs />
            </div>

            {/* Список заказов */}
            <OrdersCompanyList />
        </section>
    )
}
