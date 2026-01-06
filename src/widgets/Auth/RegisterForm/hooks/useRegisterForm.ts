import { useRegister } from '@/features/Auth/register/useRegister'
import { useForm } from 'react-hook-form'
import { RegisterFormValues } from '@/entities/Auth';
    


export const useRegisterForm = () => {
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
    const onSubmit = (data: RegisterFormValues) => mutate(data)
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
