import { Suspense } from 'react'
import { ResetPasswordForm } from '@/widgets/Auth/ResetPasswordForm'
export default function ResetPasswordPage() {

  return (
    <main className="flex items-center justify-center pb-12 py-28 my-auto">
      <div className="w-full max-w-[520px] rounded-[40px] bg-white py-15 px-13">
        {/* Заголовок */}
        <h2 className="text-[28px] font-semibold leading-[110%] text-secondary sm:text-3xl text-center">
          Изменение пароля 
        </h2>

        <div className="mt-10 space-y-5">
          {/* Форма сброса */}
          <Suspense fallback={null}>
            <ResetPasswordForm />
          </Suspense>
        </div>
      </div>
    </main>
  )
}
