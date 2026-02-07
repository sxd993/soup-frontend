import type { Order } from "@/entities/Orders/model/type/order.types"
import type { CompanyOrdersResponse } from "../types/orders.types"

export const resolveOrdersData = (
    data?: CompanyOrdersResponse | Order[]
): { orders: Order[]; total: number } => {
    const orders = Array.isArray(data) ? data : data?.orders ?? []
    const total = Array.isArray(data) ? data.length : data?.total ?? orders.length

    return { orders, total }
}
