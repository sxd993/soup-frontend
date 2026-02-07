"use client"

import { useEffect, useMemo, useState } from "react"
import type { Order } from "@/entities/Orders/model/type/order.types"
import { useCompanyOrders } from "@/features/Profile/CompanyAccount/OrdersSection/get-company-orders/model/hooks/useCompanyOrders"
import { resolveOrdersData } from "@/features/Profile/CompanyAccount/OrdersSection/get-company-orders/model/lib/resolveOrdersData"
import { useCompanyOrdersTabsStore } from "@/features/Profile/CompanyAccount/OrdersSection/orders-tabs/model/store/useCompanyOrdersTabsStore"
import { formatOrderDate, formatOrderPrice } from "../lib/formatOrderMeta"
import { useOrdersPagination } from "./useOrdersPagination"

type CompanyOrderView = Order & {
    createdAtLabel: string
    priceLabel: string
}

const PAGE_SIZE = 7

const isSameOrders = (next: CompanyOrderView[], prev: CompanyOrderView[]) => {
    if (next.length !== prev.length) return false
    return next.every((order, index) => order.id === prev[index]?.id)
}

export const useCompanyOrdersList = () => {
    const selectedStatus = useCompanyOrdersTabsStore((state) => state.selectedStatus)
    const [totalItems, setTotalItems] = useState(0)
    const [expandedOrders, setExpandedOrders] = useState<CompanyOrderView[]>([])

    const pagination = useOrdersPagination({
        totalItems,
        pageSize: PAGE_SIZE,
        pageParam: "page",
    })

    const { data, isLoading, isError } = useCompanyOrders({
        status: selectedStatus,
        page: pagination.queryPage,
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

    useEffect(() => {
        if (!pagination.isExpanded) {
            setExpandedOrders((prev) =>
                isSameOrders(viewOrders, prev) ? prev : viewOrders
            )
            return
        }

        if (pagination.queryPage <= 1) {
            setExpandedOrders((prev) =>
                isSameOrders(viewOrders, prev) ? prev : viewOrders
            )
            return
        }

        setExpandedOrders((prev) => {
            const merged = prev.length > 0 ? [...prev, ...viewOrders] : viewOrders
            const seen = new Set<string | number>()
            return merged.filter((order) => {
                if (seen.has(order.id)) return false
                seen.add(order.id)
                return true
            })
        })
    }, [pagination.isExpanded, pagination.queryPage, viewOrders])

    return {
        isLoading,
        isError,
        isEmpty: !isLoading && !isError && expandedOrders.length === 0,
        orders: expandedOrders,
        totalOrders: total,
        pagination,
        shouldShowPagination: !isLoading && !isError && total > 0,
    }
}
