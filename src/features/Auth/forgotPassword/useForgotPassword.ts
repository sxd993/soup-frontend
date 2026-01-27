import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { EMAIL_PATTERN } from '@/shared/lib'
import { getErrorMessage } from '@/shared/lib/error-handler'
import { AUTH_MESSAGES, ForgotPasswordFormValues } from '@/entities/Auth'
import { useForgotPasswordRequest } from './useForgotPasswordRequest'

export const useForgotPassword = () => {
  const router = useRouter()
  const { mutate, isPending } = useForgotPasswordRequest()
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>()

  const onSubmit = (data: ForgotPasswordFormValues) => {
    setServerError(null)
    mutate(
      { email: data.email.trim() },
      {
        onSuccess: () => {
          router.push('/auth/login')
        },
        onError: (error: Error) => {
          setServerError(getErrorMessage(error, AUTH_MESSAGES.forgotPassword.default))
        },
      },
    )
  }

  const isBusy = isPending || isSubmitting

  return {
    register,
    handleSubmit,
    onSubmit,
    isBusy,
    errors,
    serverError,
    emailPattern: EMAIL_PATTERN,
  }
}