import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLogin } from '@/features/Auth/login/useLogin'
import { LoginFormValues, AUTH_MESSAGES } from '@/entities/Auth'
import type { AuthSession } from '@/entities/Session'
import { useRouter } from 'next/navigation'
import { getErrorMessage } from '@/shared/lib/error-handler'
import { useQueryClient } from '@tanstack/react-query'

export const useLoginForm = () => {
  const router = useRouter()
  const queryClient = useQueryClient()
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
      onSuccess: () => {
        const session = queryClient.getQueryData<AuthSession>(['session'])
        const role = session?.user.role
        const target = role === 'client' ? '/profile/client/account' : role === 'company' ? '/profile/company/account' : '/profile'
        router.push(target)
      },
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
