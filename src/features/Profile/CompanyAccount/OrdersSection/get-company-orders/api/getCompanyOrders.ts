import { AxiosClient } from "@/shared/api"
import type { Order } from "@/entities/Orders/model/type/order.types"
import type { CompanyOrdersResponse } from "../model/types/orders.types"

type GetCompanyOrdersArgs = {
    status?: string
    page?: number
}

export const getCompanyOrders = async ({ status, page }: GetCompanyOrdersArgs) => {
    const response = await AxiosClient.get<CompanyOrdersResponse | Order[]>(
        "/profile/company/orders",
        {
            params: { status, page },
        }
    )

    return response.data
}
