"use client"

import { SectionTitle } from "@/shared/ui"

export const OrdersCompanyHeader = () => {
    
    return (
        <div className="flex flex-col gap-7">
            <SectionTitle
                className="font-semibold text-[28px]! leading-[110%]!"
                title='Заказы'
            />
        </div>
    )
}
