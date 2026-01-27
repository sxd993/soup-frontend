import { VerifyForm } from '@/widgets/Auth/VerifyForm'

type VerifyPageSearchParams = {
  id?: string
}

type VerifyPageProps = {
  searchParams?: Promise<VerifyPageSearchParams>
}

export default async function VerifyPage({ searchParams }: VerifyPageProps) {
  const params = searchParams ? await searchParams : undefined
  const verificationId = params?.id || ''

  return (
    <main className="flex items-center justify-center px-4 pb-12 py-28 my-auto">
      <div className="w-full max-w-[520px] rounded-[40px] bg-white py-15 px-13">
        {/* Заголовок */}
        <h2 className="text-[28px] font-semibold leading-[110%] text-secondary sm:text-3xl text-center">
          Введите код
        </h2>

        <div className="mt-10 space-y-5">
          {/* Форма подтверждения */}
          <VerifyForm verificationId={verificationId} />
        </div>
      </div>
    </main>
  )
}