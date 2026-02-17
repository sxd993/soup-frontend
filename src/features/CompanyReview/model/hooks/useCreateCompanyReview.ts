import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createCompanyReview } from "../../api/createCompanyReview"
import { uploadReviewImage } from "../../api/uploadReviewImage"

export function useCreateCompanyReview(companyId: string) {
  const queryClient = useQueryClient()

  const createMutation = useMutation({
    mutationKey: ["create-company-review", companyId],
    mutationFn: (payload: { rating: number; comment: string }) =>
      createCompanyReview(companyId, payload),
  })

  const uploadMutation = useMutation({
    mutationKey: ["upload-review-image", companyId],
    mutationFn: ({
      reviewId,
      file,
    }: {
      reviewId: string | number
      file: File
    }) => uploadReviewImage(companyId, String(reviewId), file),
  })

  const submitReview = async (payload: { rating: number; comment: string; files: File[] }) => {
    const review = await createMutation.mutateAsync({
      rating: payload.rating,
      comment: payload.comment,
    })
    const reviewId = review.id
    for (const file of payload.files) {
      await uploadMutation.mutateAsync({ reviewId, file })
    }
    queryClient.invalidateQueries({ queryKey: ["company-public-reviews", companyId] })
    return review
  }

  return {
    submitReview,
    isCreating: createMutation.isPending,
    isUploading: uploadMutation.isPending,
    isPending: createMutation.isPending || uploadMutation.isPending,
    error: createMutation.error ?? uploadMutation.error,
  }
}
