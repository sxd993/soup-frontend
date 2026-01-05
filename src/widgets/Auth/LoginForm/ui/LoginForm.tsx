'use client'

import { Button, Input } from '@/shared/ui'
import Link from 'next/link'
import { useLoginForm } from '../hooks/useLoginForm'

export const LoginForm = () => {
  const { register, handleSubmit, onSubmit, isBusy } = useLoginForm()

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>

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

      {/* Пароль */}
      <Input
        type="password"
        placeholder="Пароль"
        {...register('password', { required: true, minLength: 6 })}
      />

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
