import { Button, Input } from '@/shared/ui'
import Link from 'next/link'

export const LoginForm = () => {
  return (
    <form className="flex flex-col gap-5">

      {/* Почта */}
      <Input
        type="email"
        name="email"
        placeholder="E-mail"
        className="text-secondary"
      />

      {/* Пароль */}
      <Input
        type="password"
        name="password"
        placeholder="Пароль"
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
        >
          <p className="text-accent-senary font-semibold text-base leading-[140%]">
            Войти
          </p>
        </Button>
      </div>

    </form>
  )
}
