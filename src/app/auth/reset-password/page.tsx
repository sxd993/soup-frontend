import { ResetPasswordForm } from '@/widgets/Auth/ResetPasswordForm'

type ResetPasswordPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

const resolveToken = (value?: string | string[]) => {
  if (Array.isArray(value)) return value[0] ?? ''
  return value ?? ''
}

export default async function ResetPasswordPage({ searchParams }: ResetPasswordPageProps) {
  const params = await searchParams
  const token = resolveToken(params.token)

  return (
    <main className="flex items-center justify-center px-4 pb-12 py-28 my-auto">
      <div className="w-full max-w-[520px] rounded-[40px] bg-white py-15 px-13">
        {/* Заголовок */}
        <h2 className="text-[28px] font-semibold leading-[110%] text-secondary sm:text-3xl text-center">
          Изменение пароля 
        </h2>

        <div className="mt-10 space-y-5">
          {/* Форма сброса */}
          <ResetPasswordForm token={token} />
        </div>
      </div>
    </main>
  )
}
