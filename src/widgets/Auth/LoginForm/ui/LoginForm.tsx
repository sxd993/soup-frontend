import { Button } from '@/shared'
import Link from 'next/link'

export const LoginForm = () => {
  return (
    <form className="flex flex-col gap-5">
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        className="w-full rounded-[20px] border-2 border-[#c5c2c2] px-[22px] py-[19px] text-base font-medium text-secondary outline-none transition focus:border-primary"
      />
      <input
        type="password"
        name="password"
        placeholder="Пароль"
        className="w-full rounded-[20px] border-2 border-[#c5c2c2] px-[22px] py-[19px] text-base font-medium outline-none transition focus:border-primary"
      />
      <Link
        href="/auth/forgot-password"
        className="text-sm font-medium flex justify-center"
      >
        <p className='text-primary border-b text-sm leading-[130%]'>
          Забыли пароль?
        </p>
      </Link>
      <div className='flex justify-center mt-5'>
        <Button
          className="rounded-full bg-primary px-19 py-2  transition hover:bg-accent flex justify-center"
        >
          <p className='text-accent-senary font-semibold text-base leading-[140%]'>
            Войти
          </p>
        </Button>
      </div>
    </form>
  )
}
