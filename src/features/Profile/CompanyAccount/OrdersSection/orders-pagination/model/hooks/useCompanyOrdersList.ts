"use client"

import { useEffect, useMemo, useState } from "react"
import type { CompanyOrder } from "@/entities/Profile/Company/model/types/company.types"
import { useCompanyOrders } from "@/features/Profile/CompanyAccount/OrdersSection/get-company-orders/model/hooks/useCompanyOrders"
import { resolveOrdersData } from "@/features/Profile/CompanyAccount/OrdersSection/get-company-orders/model/lib/resolveOrdersData"
import { useCompanyOrdersTabsStore } from "@/features/Profile/CompanyAccount/OrdersSection/orders-tabs/model/store/useCompanyOrdersTabsStore"
import { formatOrderDate, formatOrderPrice } from "../lib/formatOrderMeta"
import { useOrdersPagination } from "./useOrdersPagination"

type CompanyOrderView = CompanyOrder & {
    createdAtLabel: string
    priceLabel: string
}

export const useCompanyOrdersList = (pageSize = 7) => {
    const selectedStatus = useCompanyOrdersTabsStore((state) => state.selectedStatus)
    const [totalItems, setTotalItems] = useState(0)

    const pagination = useOrdersPagination({
        totalItems,
        pageSize,
        pageParam: "page",
    })

    const queryPage = pagination.isExpanded ? 1 : pagination.queryPage
    const queryPageSize = pagination.isExpanded ? pagination.visibleCount : pageSize

    const { data, isLoading, isError } = useCompanyOrders({
        status: selectedStatus,
        page: queryPage,
        pageSize: queryPageSize,
    })

    const { orders, total } = resolveOrdersData(data)

    useEffect(() => {
        setTotalItems(total)
    }, [total])

    useEffect(() => {
        pagination.setPage(1)
    }, [selectedStatus])

    const viewOrders: CompanyOrderView[] = useMemo(
        () =>
            orders.map((order) => ({
                ...order,
                createdAtLabel: formatOrderDate(order.createdAt),
                priceLabel: formatOrderPrice(order.price),
            })),
        [orders]
    )

    return {
        isLoading,
        isError,
        isEmpty: !isLoading && !isError && viewOrders.length === 0,
        orders: viewOrders,
        totalOrders: total,
        pagination,
        shouldShowPagination: !isLoading && !isError && total > 0,
    }
}
