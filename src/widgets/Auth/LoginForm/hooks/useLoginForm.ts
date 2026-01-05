import { useForm } from 'react-hook-form'
import { useLogin } from '@/features/Auth/login/useLogin'
import { LoginFormValues } from '@/entities/Auth'

export const useLoginForm = () => {
  const { mutate, isPending } = useLogin()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormValues>()

  const onSubmit = (data: LoginFormValues) => mutate(data)
  const isBusy = isPending || isSubmitting

  return {
    register,
    handleSubmit,
    onSubmit,
    isBusy,
  }
}
