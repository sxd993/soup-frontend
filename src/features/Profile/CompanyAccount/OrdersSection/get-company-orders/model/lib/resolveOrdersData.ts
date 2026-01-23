import type { CompanyOrder } from "@/entities/Profile/Company/model/types/company.types"
import type { CompanyOrdersResponse } from "../types/orders.types"

export const resolveOrdersData = (
    data?: CompanyOrdersResponse | CompanyOrder[]
): { orders: CompanyOrder[]; total: number } => {
    const orders = Array.isArray(data) ? data : data?.orders ?? []
    const total = Array.isArray(data) ? data.length : data?.total ?? orders.length

    return { orders, total }
}
