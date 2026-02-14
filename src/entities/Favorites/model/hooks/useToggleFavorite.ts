import type { AxiosError } from "axios"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addFavorite, removeFavorite } from "../api/favorites.api"
import { FAVORITES_LIST_KEY } from "./useFavoritesList"
import { showErrorToast, showSuccessToast } from "@/shared/ui/State"

export function useToggleFavorite() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({
      companyId,
      isCurrentlyFavorite,
    }: {
      companyId: number
      isCurrentlyFavorite: boolean
    }) => {
      if (isCurrentlyFavorite) {
        return removeFavorite(companyId)
      }
      return addFavorite(companyId)
    },
    onSuccess: (_, { isCurrentlyFavorite }) => {
      queryClient.invalidateQueries({ queryKey: FAVORITES_LIST_KEY })
      if (isCurrentlyFavorite) {
        showErrorToast("Убрано из избранного")
      } else {
        showSuccessToast("Добавлено в избранное")
      }
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === 401) {
        showErrorToast("Войдите в аккаунт, чтобы сохранять в избранное")
      } else {
        showErrorToast("Не удалось изменить избранное")
      }
    },
  })
}
