import { useState } from 'react'
import { useRegister } from '@/features/Auth/register/useRegister'
import { useForm } from 'react-hook-form'
import { RegisterFormValues, AUTH_MESSAGES } from '@/entities/Auth';
import { useRouter } from 'next/navigation'
import { getErrorMessage } from '@/shared/lib/error-handler'

export const useRegisterForm = () => {
    const router = useRouter()
    const { mutate, isPending } = useRegister()
    const [serverError, setServerError] = useState<string | null>(null)
    const {
        register,
        handleSubmit,
        getValues,
        formState: { isSubmitting, errors, isValid },
    } = useForm<RegisterFormValues>({
        mode: 'onSubmit',
        defaultValues: { role: 'client' },
    })

    const isFormValid = isValid

    // Функция отправки формы
    const onSubmit = (data: RegisterFormValues) => {
        setServerError(null)
        mutate(data, {
            onSuccess: (response) => {
                if (response.status === 201) {
                    // Временно без запроса кода — сразу на логин
                    // const verificationId = response.data?.verificationId
                    // if (verificationId) {
                    //     router.push(`/auth/verify?id=${verificationId}`)
                    // } else {
                    //     router.push('/auth/login')
                    // }
                    router.push('/auth/login')
                }
            },
            onError: (error: Error) => {
                const errorMessage = getErrorMessage(error, AUTH_MESSAGES.register.default)
                setServerError(errorMessage)
            }
        })
    }
    const isBusy = isPending || isSubmitting

    return {
        register,
        handleSubmit,
        getValues,
        onSubmit,
        isBusy,
        errors,
        serverError,
        isFormValid,
    }
}
