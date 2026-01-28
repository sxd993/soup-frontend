import { useMutation } from '@tanstack/react-query'
import { AxiosClient } from '@/shared/api'
import type { ResendDto, ResendResponse } from '@/entities/Auth'

export const useResend = () => {
  return useMutation<ResendResponse, Error, ResendDto>({
    mutationKey: ['resend'],
    mutationFn: async (data: ResendDto) => {
      const response = await AxiosClient.post<ResendResponse>('/auth/resend', data)
      return response.data
    },
  })
}