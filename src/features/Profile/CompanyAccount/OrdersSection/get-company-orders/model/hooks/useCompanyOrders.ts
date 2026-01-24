import { useQuery } from "@tanstack/react-query"
import { getCompanyOrders } from "../../api/getCompanyOrders"

type UseCompanyOrdersArgs = {
    status?: string
    page?: number
}

export const useCompanyOrders = ({ status, page }: UseCompanyOrdersArgs) => {
    return useQuery({
        queryKey: ["company-orders", status ?? "all", page ?? 1],
        queryFn: () => getCompanyOrders({ status, page }),
        staleTime: 60 * 1000,
    })
}
