'use client'

import { Button, Input, RadioCircleIcon } from '@/shared/ui'
import { useRegisterForm } from '../hooks/useRegisterForm'

export const RegisterForm = () => {
   const {handleSubmit, onSubmit, register, isBusy} = useRegisterForm()
    return (
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
            
            {/* Роль */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        value="customer"
                        className="peer sr-only"
                        {...register('role', { required: true })}
                    />
                    <span className="flex h-6 w-6 items-center justify-center text-accent transition opacity-60 peer-checked:opacity-100">
                        <RadioCircleIcon aria-hidden="true" />
                    </span>
                    <span className="text-[#535353] transition peer-checked:text-black">
                        Я заказчик
                    </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        value="executor"
                        className="peer sr-only"
                        {...register('role', { required: true })}
                    />
                    <span className="flex h-6 w-6 items-center justify-center text-accent transition opacity-60 peer-checked:opacity-100">
                        <RadioCircleIcon aria-hidden="true" />
                    </span>
                    <span className="text-[#535353] transition peer-checked:text-black">
                        Я исполнитель
                    </span>
                </label>
            </div>

            {/* ФИО / компания */}
            <Input
                type="text"
                placeholder="ФИО/Название компании"
                className="text-secondary"
                {...register('name', { required: true, minLength: 2 })}
            />

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

            {/* Пароль */}
            <Input
                type="password"
                placeholder="Пароль"
                {...register('password', { required: true, minLength: 8 })}
            />

            {/* Подтверждение пароля */}
            <Input
                type="password"
                placeholder="Подтверждение пароля"
                {...register('passwordConfirm', {
                    required: true
                })}
            />

            {/* Создать аккаунт */}
            <div className="flex justify-center mt-5">
                <Button
                    className="rounded-full bg-primary px-8 py-2 transition hover:bg-accent flex justify-center"
                    type="submit"
                    disabled={isBusy}
                >
                    <p className="text-accent-senary font-semibold text-base leading-[140%]">
                        Создать аккаунт
                    </p>
                </Button>
            </div>
        </form>
    )
}
