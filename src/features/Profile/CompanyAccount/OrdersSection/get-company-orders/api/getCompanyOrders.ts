import { AxiosClient } from "@/shared/api/AxiosClient"
import type { CompanyOrder } from "@/entities/Profile/Company/model/types/company.types"
import type { CompanyOrdersResponse } from "../model/types/orders.types"

type GetCompanyOrdersArgs = {
    status?: string
    page?: number
    pageSize?: number
}

export const getCompanyOrders = async ({ status, page, pageSize }: GetCompanyOrdersArgs) => {
    const response = await AxiosClient.get<CompanyOrdersResponse | CompanyOrder[]>(
        "/profile/company/orders",
        {
            params: { status, page, pageSize },
        }
    )

    return response.data
}
