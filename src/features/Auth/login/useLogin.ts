import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AxiosClient } from '@/shared/api/AxiosClient'
import type { LoginFormValues, LoginResponse } from "@/entities/Auth"
import type { AuthSession } from "@/entities/Session"
import { fetchSessionFromToken } from "@/entities/Session"

export const useLogin = () => {
    const queryClient = useQueryClient()
    
    return useMutation<LoginResponse, Error, LoginFormValues>({
        mutationKey: ['login'],
        mutationFn: async (data: LoginFormValues) => {
            // Получаем accessToken при логине
            const loginResponse = await AxiosClient.post<LoginResponse>('/auth/login', data)
            const { accessToken } = loginResponse.data

            // Получаем полную сессию (включая данные пользователя)
            const session = await fetchSessionFromToken(accessToken, AxiosClient)
            queryClient.setQueryData<AuthSession>(['session'], session)

            return loginResponse.data
        }
    })
}