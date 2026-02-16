"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toggleBlogLike } from "../api/toggleBlogLike"
import { showSuccessToast, showErrorToast } from "@/shared/ui/State/toast"
import { getErrorMessage } from "@/shared/lib"

export function useToggleBlogLike(blogId: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => toggleBlogLike(blogId),
    onSuccess: (data) => {
      queryClient.setQueryData(["blog-like", blogId], { 
        liked: data.liked,
        likeCount: data.likeCount,
      })
      queryClient.invalidateQueries({ queryKey: ["blogs"] })
      queryClient.invalidateQueries({ queryKey: ["company-blogs"] })
      
      if (data.liked) {
        showSuccessToast("Блог лайкнут", "Вы успешно лайкнули блог.")
      } else {
        showSuccessToast("Лайк убран", "Вы убрали лайк с блога.")
      }
    },
    onError: (error) => {
      showErrorToast(
        "Не удалось изменить лайк",
        getErrorMessage(error, "Попробуйте ещё раз.")
      )
    },
  })
}
