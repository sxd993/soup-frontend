import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AxiosClient } from '@/shared/api/AxiosClient'
import type { AuthSession } from "@/entities/Session"
import type { LogoutResponse } from '../types/logout.types'

export const useLogout = () => {
    const queryClient = useQueryClient()
    
    return useMutation<LogoutResponse, Error, void>({
        mutationKey: ['logout'],
        mutationFn: async () => {
            const response = await AxiosClient.post<LogoutResponse>('/auth/logout')
            return response.data
        },
        onSuccess: () => {
            // Очищаем сессию из кеша
            queryClient.setQueryData<AuthSession>(['session'], null)
            // Очищаем весь кеш React Query
            queryClient.clear()
        }
    })
}