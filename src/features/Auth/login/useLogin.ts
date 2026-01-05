import { useMutation } from "@tanstack/react-query"
import { AxiosClient } from '@/shared/api/AxiosClient'
import type { LoginFormValues } from "@/entities/Auth"


export const useLogin = () => {
    return useMutation({
        mutationKey: ['login'],
        mutationFn: async (data: LoginFormValues) => {
            const response = await AxiosClient.post('/auth/login', data)
            return response.data
        }
    })
}