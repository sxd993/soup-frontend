'use client'

import { Button, Input } from '@/shared/ui'
import Link from 'next/link'
import { useLoginForm } from '../hooks/useLoginForm'

export const LoginForm = () => {
  const { register, handleSubmit, onSubmit, isBusy, errors, serverError } = useLoginForm()

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      {/* Ошибка сервера */}
      {serverError && (
        <div className="p-3 rounded-lg bg-red-50 border border-red-200">
          <p className="text-sm text-red-600 text-center">{serverError}</p>
        </div>
      )}

      {/* Почта */}
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
        {...register('password', { required: true, minLength: 6 })}
      />
      {errors.password && (
        <p className="text-xs text-red-600">
          {errors.password.type === 'minLength' ? 'Минимум 6 символов' : 'Введите пароль'}
        </p>
      )}

      {/* Забыли пароль */}
      <Link
        href="/auth/forgot-password"
        className="text-sm font-medium flex justify-center"
      >
        <p className="text-primary border-b text-sm leading-[130%]">
          Забыли пароль?
        </p>
      </Link>

      {/* Кнопка входа */}
      <div className="flex justify-center mt-5">
        <Button
          className="rounded-full bg-primary px-19 py-2  transition hover:bg-accent flex justify-center"
          type="submit"
          disabled={isBusy}
        >
          <p className="text-accent-senary font-semibold text-base leading-[140%]">
            Войти
          </p>
        </Button>
      </div>

    </form>
  )
}
