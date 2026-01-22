import { useQuery } from "@tanstack/react-query"
import { fetchCompanyProfile } from "../api/fetchCompanyProfile"

export const useCompanyProfile = (userId?: string) => {
    return useQuery({
        queryKey: ["company-profile", userId],
        queryFn: fetchCompanyProfile,
        enabled: Boolean(userId),
        staleTime: 5 * 60 * 1000,
    })
}
