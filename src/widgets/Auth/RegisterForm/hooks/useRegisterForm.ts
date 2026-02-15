import { useState } from 'react'
import { useRegister } from '@/features/Auth/register/useRegister'
import { useForm } from 'react-hook-form'
import { RegisterFormValues, AUTH_MESSAGES } from '@/entities/Auth';
import { useRouter, useSearchParams } from 'next/navigation'
import { getErrorMessage } from '@/shared/lib/error-handler'
import { showErrorToast } from '@/shared/ui'

export const useRegisterForm = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
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
                    const returnUrl = searchParams?.get('returnUrl')
                    const loginUrl = returnUrl
                        ? `/auth/login?returnUrl=${encodeURIComponent(returnUrl)}`
                        : '/auth/login'
                    router.push(loginUrl)
                }
            },
            onError: (error: Error) => {
                const errorMessage = getErrorMessage(error, AUTH_MESSAGES.register.default)
                setServerError(errorMessage)
                showErrorToast(AUTH_MESSAGES.register.error, errorMessage)
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
