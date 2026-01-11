import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLogin } from '@/features/Auth/login/useLogin'
import { LoginFormValues, AUTH_MESSAGES } from '@/entities/Auth'
import { useRouter } from 'next/navigation'
import { getErrorMessage } from '@/shared/lib/error-handler'

export const useLoginForm = () => {
  const router = useRouter()
  const { mutate, isPending } = useLogin()
  const [serverError, setServerError] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<LoginFormValues>()

  const onSubmit = (data: LoginFormValues) => {
    setServerError(null)
    mutate(data, {
      onSuccess: () => router.push('/profile'),
      onError: (error: Error) => {
        const errorMessage = getErrorMessage(error, AUTH_MESSAGES.login.default)
        setServerError(errorMessage)
      }
  })
  }
  const isBusy = isPending || isSubmitting

  return {
    register,
    handleSubmit,
    onSubmit,
    isBusy,
    errors,
    serverError,
  }
}
