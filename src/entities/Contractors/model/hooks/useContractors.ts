import { useQuery } from "@tanstack/react-query"
import { getContractors } from "../api/getContractors"

export const contractorsKeys = {
  all: ["contractors"] as const,
}

const STALE_TIME_MS = 5 * 60 * 1000

export const useContractors = () => {
  return useQuery({
    queryKey: contractorsKeys.all,
    queryFn: getContractors,
    staleTime: STALE_TIME_MS,
  })
}
