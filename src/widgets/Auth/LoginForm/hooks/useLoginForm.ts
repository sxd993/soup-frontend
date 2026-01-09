import { useForm } from 'react-hook-form'
import { useLogin } from '@/features/Auth/login/useLogin'
import { LoginFormValues } from '@/entities/Auth'
import { useRouter } from 'next/navigation'

export const useLoginForm = () => {
  const router = useRouter()
  const { mutate, isPending } = useLogin()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<LoginFormValues>()

  const onSubmit = (data: LoginFormValues) => mutate(data, {
    onSuccess: () => router.push('/profile')
  })
  const isBusy = isPending || isSubmitting

  return {
    register,
    handleSubmit,
    onSubmit,
    isBusy,
    errors,
  }
}
