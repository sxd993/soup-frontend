import { useMutation } from "@tanstack/react-query"
import { AxiosClient } from '@/shared/api/AxiosClient'
import type { RegisterFormValues, RegisterResponse } from "@/entities/Auth"

export const useRegister = () => {
    return useMutation<{ data: RegisterResponse; status: number }, Error, RegisterFormValues>({
        mutationKey: ['register'],
        mutationFn: async (data: RegisterFormValues) => {
            const response = await AxiosClient.post<RegisterResponse>('/auth/register', data)
            return { data: response.data, status: response.status }
        }
    })
}