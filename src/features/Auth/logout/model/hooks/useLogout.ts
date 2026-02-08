import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AxiosClient } from '@/shared/api'
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
            // Сначала очищаем весь кеш React Query
            queryClient.clear()
            // Сразу помечаем сессию как "нет пользователя", чтобы не запускать refetch и форма входа показалась сразу
            queryClient.setQueryData<AuthSession | null>(['session'], null)
        }
    })
}