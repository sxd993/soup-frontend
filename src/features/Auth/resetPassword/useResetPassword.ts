import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { getErrorMessage } from '@/shared/lib/error-handler'
import { AUTH_MESSAGES, ResetPasswordFormValues } from '@/entities/Auth'
import { useResetPasswordRequest } from './useResetPasswordRequest'

export const useResetPassword = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams?.get('token') || ''
  const { mutate, isPending } = useResetPasswordRequest()
  const [serverError, setServerError] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormValues>()

  const onSubmit = (data: ResetPasswordFormValues) => {
    if (!token) {
      setServerError(AUTH_MESSAGES.resetPassword.missingToken)
      return
    }

    setServerError(null)
    mutate(
      {
        token,
        password: data.password,
        passwordConfirm: data.passwordConfirm,
      },
      {
        onSuccess: () => {
          setIsSuccess(true)
          router.push('/auth/reset-password/success')
        },
        onError: (error: Error) => {
          setIsSuccess(false)
          setServerError(getErrorMessage(error, AUTH_MESSAGES.resetPassword.default))
        },
      },
    )
  }

  const isBusy = isPending || isSubmitting

  return {
    token,
    register,
    handleSubmit,
    getValues,
    onSubmit,
    isBusy,
    errors,
    serverError,
    isSuccess,
  }
}