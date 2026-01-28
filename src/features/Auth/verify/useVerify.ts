import { useMutation } from "@tanstack/react-query"
import { AxiosClient } from '@/shared/api'
import type { VerifyDto, VerifyResponse } from '@/entities/Auth'

export const useVerify = () => {
    return useMutation<VerifyResponse, Error, VerifyDto>({
        mutationKey: ['verify'],
        mutationFn: async (data: VerifyDto) => {
            const response = await AxiosClient.post<VerifyResponse>('/auth/verify', data)
            return response.data
        }
    })
}