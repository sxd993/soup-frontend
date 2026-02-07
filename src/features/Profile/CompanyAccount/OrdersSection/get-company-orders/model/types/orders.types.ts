import type { Order } from "@/entities/Orders/model/type/order.types"

export type CompanyOrdersResponse = {
    total: number
    page: number
    pageSize: number
    orders: Order[]
}
