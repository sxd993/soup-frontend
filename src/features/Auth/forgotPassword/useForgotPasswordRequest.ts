import { useMutation } from '@tanstack/react-query'
import { AxiosClient } from '@/shared/api'
import type { ForgotPasswordDto, ForgotPasswordResponse } from '@/entities/Auth'

export const useForgotPasswordRequest = () => {
  return useMutation<ForgotPasswordResponse, Error, ForgotPasswordDto>({
    mutationKey: ['forgot-password'],
    mutationFn: async (data: ForgotPasswordDto) => {
      const response = await AxiosClient.post<ForgotPasswordResponse>(
        '/auth/forgot-password',
        data,
      )
      return response.data
    },
  })
}