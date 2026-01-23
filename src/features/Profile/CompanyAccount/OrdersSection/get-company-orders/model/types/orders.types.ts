import type { CompanyOrder } from "@/entities/Profile/Company/model/types/company.types"

export type CompanyOrdersResponse = {
    total: number
    page: number
    pageSize: number
    orders: CompanyOrder[]
}
