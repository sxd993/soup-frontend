import Link from 'next/link'

export const RedirectToRegister = () => {
  return (
    <div className="text-sm text-accent-quinary flex justify-center">
      Нет аккаунта?{' '}
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
