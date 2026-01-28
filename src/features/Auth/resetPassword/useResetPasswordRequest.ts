import { useMutation } from '@tanstack/react-query'
import { AxiosClient } from '@/shared/api'
import type { ResetPasswordDto, ResetPasswordResponse } from '@/entities/Auth'

export const useResetPasswordRequest = () => {
  return useMutation<ResetPasswordResponse, Error, ResetPasswordDto>({
    mutationKey: ['reset-password'],
    mutationFn: async (data: ResetPasswordDto) => {
      const response = await AxiosClient.post<ResetPasswordResponse>(
        '/auth/reset-password',
        data,
      )
      return response.data
    },
  })
}