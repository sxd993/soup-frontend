import { useRegister } from '@/features/Auth/register/useRegister'
import { useForm } from 'react-hook-form'
import { RegisterFormValues } from '@/entities/Auth';
import { useRouter } from 'next/navigation'
    


export const useRegisterForm = () => {
    const router = useRouter()
    // Консты
    const { mutate, isPending } = useRegister()
    const {
        register,
        handleSubmit,
        getValues,
        formState: { isSubmitting, errors },
    } = useForm<RegisterFormValues>({
        defaultValues: { role: 'client' },
    })

    // Функция отправки формы
    const onSubmit = (data: RegisterFormValues) =>
        mutate(data, {
            onSuccess: (response) => {
                if (response.status === 201) {
                    router.push('/profile')
                }
            },
        })
    const isBusy = isPending || isSubmitting

    return {
        register,
        handleSubmit,
        getValues,
        onSubmit,
        isBusy,
        errors,
    }
}
