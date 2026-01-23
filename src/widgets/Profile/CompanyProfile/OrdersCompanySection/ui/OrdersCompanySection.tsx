"use client"

import { OrdersCompanyHeader } from "./OrdersCompanyHeader"
import { OrdersCompanyTabs } from "./OrdersCompanyTabs"
import { OrdersCompanyList } from "./OrdersCompanyList"

export const OrdersCompanySection = () => {
    return (
        <section className="flex flex-col gap-8 min-h-screen">
            <div className="flex flex-col gap-6">
                <OrdersCompanyHeader />
                <OrdersCompanyTabs />
            </div>

            <OrdersCompanyList />
        </section>
    )
}
