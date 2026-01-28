import { AxiosClient } from "@/shared/api"
import type { CompanyOrder } from "@/entities/Profile/Company/model/types/company.types"
import type { CompanyOrdersResponse } from "../model/types/orders.types"

type GetCompanyOrdersArgs = {
    status?: string
    page?: number
}

export const getCompanyOrders = async ({ status, page }: GetCompanyOrdersArgs) => {
    const response = await AxiosClient.get<CompanyOrdersResponse | CompanyOrder[]>(
        "/profile/company/orders",
        {
            params: { status, page },
        }
    )

    return response.data
}
