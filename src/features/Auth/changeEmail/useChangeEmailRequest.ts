import { useMutation } from '@tanstack/react-query'
import { AxiosClient } from '@/shared/api'
import type { ChangeEmailDto, ChangeEmailResponse } from '@/entities/Auth'

export const useChangeEmailRequest = () => {
  return useMutation<ChangeEmailResponse, Error, ChangeEmailDto>({
    mutationKey: ['change-email'],
    mutationFn: async (data: ChangeEmailDto) => {
      const response = await AxiosClient.post<ChangeEmailResponse>(
        '/auth/update-verification-email',
        data,
      )
      return response.data
    },
  })
}