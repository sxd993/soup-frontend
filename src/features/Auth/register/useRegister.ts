import { useMutation } from "@tanstack/react-query"
import { AxiosClient } from '@/shared/api/AxiosClient'
import { RegisterFormValues } from "@/entities/Auth"

export const useRegister = () => {
    return useMutation({
        mutationKey: ['register'],
        mutationFn: async (data: RegisterFormValues) => {
            const response = await AxiosClient.post('/auth/register', data)
            return response
        }
    })
}
