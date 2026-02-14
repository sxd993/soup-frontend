import { AxiosClient } from "@/shared/api"

export type FavoritesListResponse = { companyIds: number[] }
export type FavoriteCheckResponse = { isFavorite: boolean }

export const getFavoritesList = async (): Promise<FavoritesListResponse> => {
  const { data } = await AxiosClient.get<FavoritesListResponse>("/favorites")
  return data
}

export const checkFavorite = async (companyId: number): Promise<FavoriteCheckResponse> => {
  const { data } = await AxiosClient.get<FavoriteCheckResponse>(`/favorites/check/${companyId}`)
  return data
}

export const addFavorite = async (companyId: number): Promise<{ added: true }> => {
  const { data } = await AxiosClient.post<{ added: true }>(`/favorites/${companyId}`)
  return data
}

export const removeFavorite = async (companyId: number): Promise<{ removed: true }> => {
  const { data } = await AxiosClient.delete<{ removed: true }>(`/favorites/${companyId}`)
  return data
}
