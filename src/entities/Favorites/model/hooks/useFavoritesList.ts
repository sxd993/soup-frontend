import { useQuery } from "@tanstack/react-query"
import { getFavoritesList } from "../api/favorites.api"

const FAVORITES_LIST_KEY = ["favorites", "list"] as const

export function useFavoritesList(options?: { enabled?: boolean }) {
  return useQuery({
    queryKey: FAVORITES_LIST_KEY,
    queryFn: getFavoritesList,
    enabled: options?.enabled ?? true,
    staleTime: 60 * 1000,
  })
}

export { FAVORITES_LIST_KEY }
