import { useQuery } from "@tanstack/react-query"
import { getCompanyOrders } from "../../api/getCompanyOrders"

type UseCompanyOrdersArgs = {
    status?: string
    page?: number
    pageSize?: number
}

export const useCompanyOrders = ({ status, page, pageSize }: UseCompanyOrdersArgs) => {
    return useQuery({
        queryKey: ["company-orders", status ?? "all", page ?? 1, pageSize ?? 7],
        queryFn: () => getCompanyOrders({ status, page, pageSize }),
        staleTime: 60 * 1000,
    })
}
