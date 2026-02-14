import { useQuery } from "@tanstack/react-query"
import { fetchClientProfile } from "../api/fetchClientProfile"

export const useClientProfile = (userId?: string) => {
    return useQuery({
        queryKey: ["client-profile", userId],
        queryFn: fetchClientProfile,
        enabled: Boolean(userId),
        staleTime: 5 * 60 * 1000,
    })
}
