"use client"

import { useOrdersCompanyTabs } from "../model/hooks/useOrdersCompanyTabs"


export const OrdersCompanyTabs = () => {
    const { items, selectedStatus, handleSelect } = useOrdersCompanyTabs()

    return (
        <div className="w-full overflow-x-auto">
            <div className="flex min-w-max gap-4 rounded-[40px] p-2">
                {items.map((item) => {
                    const isActive = item.id === selectedStatus
                    return (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => handleSelect(item.id)}
                            className={`shrink-0 whitespace-nowrap rounded-[40px] px-6 py-2 text-[16px] font-semibold transition-colors ${isActive ? "bg-white text-secondary" : "text-accent-septenary"
                                }`}
                        >
                            {item.label}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
