'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const AuthRedirect = () => {

  const pathname = usePathname()

  if (pathname === '/auth/register') {
    return (
      <div className="text-sm text-accent-quinary flex justify-center gap-1">
        Уже есть аккаунт?
        <Link
          href="/auth/login"
          className="font-semibold text-primary underline-offset-4 hover:underline"
        >
          <p className='text-primary border-b text-sm leading-[130%]'>
            Войдите
          </p>
        </Link>
      </div>
    )
  }

  if (pathname === '/auth/login') {
    return (
      <div className="text-sm text-accent-quinary flex justify-center gap-1">
        Нет аккаунта?
        <Link
          href="/auth/register"
          className="font-semibold text-primary underline-offset-4 hover:underline"
        >
          <p className='text-primary border-b text-sm leading-[130%]'>
            Зарегистрируйтесь
          </p>
        </Link>
      </div>
    )
  }
}
