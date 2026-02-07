'use client'

import { Button, Input, RadioCircleIcon } from '@/shared/ui'
import { useRegisterForm } from '../hooks/useRegisterForm'

export const RegisterForm = () => {
   const { handleSubmit, onSubmit, register, errors, getValues, serverError } = useRegisterForm()
    return (
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
            {/* Ошибка сервера */}
            {serverError && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                    <p className="text-sm text-red-600 text-center">{serverError}</p>
                </div>
            )}
            
            {/* Роль */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        value="client"
                        className="peer sr-only"
                        {...register('role', { required: true })}
                    />
                    <span className="relative flex h-6 w-6 items-center justify-center text-accent transition opacity-60 peer-checked:opacity-100 peer-checked:[&>span]:opacity-100">
                        <RadioCircleIcon aria-hidden="true" />
                        <span className="absolute h-3 w-3 rounded-full bg-accent opacity-0 transition" />
                    </span>
                    <span className="text-accent-septenary transition peer-checked:text-black">
                        Заказчик
                    </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        value="company"
                        className="peer sr-only"
                        {...register('role', { required: true })}
                    />
                    <span className="relative flex h-6 w-6 items-center justify-center text-accent transition opacity-60 peer-checked:opacity-100 peer-checked:[&>span]:opacity-100">
                        <RadioCircleIcon aria-hidden="true" />
                        <span className="absolute h-3 w-3 rounded-full bg-accent opacity-0 transition" />
                    </span>
                    <span className="text-accent-septenary transition peer-checked:text-black">
                        Компания
                    </span>
                </label>
            </div>
            {errors.role && (
                <p className="text-xs text-red-600 text-center">Выберите роль</p>
            )}

            {/* ФИО / компания */}
            <Input
                type="text"
                placeholder="ФИО/Название компании"
                className="text-secondary"
                {...register('name', { required: true, minLength: 2 })}
            />
            {errors.name && (
                <p className="text-xs text-red-600">
                    {errors.name.type === 'minLength'
                        ? 'Минимум 2 символа'
                        : 'Введите имя или название компании'}
                </p>
            )}

            {/* E-mail */}
            <Input
                type="email"
                placeholder="E-mail"
                className="text-secondary"
                {...register('email', {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
            />
            {errors.email && (
                <p className="text-xs text-red-600">
                    {errors.email.type === 'pattern' ? 'Введите корректный e-mail' : 'Введите e-mail'}
                </p>
            )}

            {/* Пароль */}
            <Input
                type="password"
                placeholder="Пароль"
                {...register('password', { required: true, minLength: 8 })}
            />
            {errors.password && (
                <p className="text-xs text-red-600">
                    {errors.password.type === 'minLength' ? 'Минимум 8 символов' : 'Введите пароль'}
                </p>
            )}

            {/* Подтверждение пароля */}
            <Input
                type="password"
                placeholder="Подтверждение пароля"
                {...register('passwordConfirm', {
                    required: true,
                    validate: (value) => value === getValues('password') || 'Пароли не совпадают',
                })}
            />
            {errors.passwordConfirm && (
                <p className="text-xs text-red-600">
                    {errors.passwordConfirm.message ?? 'Подтвердите пароль'}
                </p>
            )}

            {/* Создать аккаунт */}
            <div className="flex justify-center mt-5">
                <Button
                    className="rounded-full px-8 py-2 flex justify-center cursor-pointer"
                    type="submit"
                >
                    <p className="text-accent-senary font-semibold text-base leading-[140%]">
                        Создать аккаунт
                    </p>
                </Button>
            </div>
        </form>
    )
}
