import { Suspense } from 'react'
import { ChangeEmailForm } from '@/widgets/Auth/ChangeEmailForm'
import { LoadingState } from '@/shared/ui'

export default function ChangeEmailPage() {
  return (
    <main className="flex items-center justify-center pb-12 py-28 my-auto">
      <div className="w-full max-w-[520px] rounded-[40px] bg-white py-15 px-13">
        <h2 className="text-[28px] font-semibold leading-[110%] text-secondary sm:text-3xl text-center">
          Изменение e-mail
        </h2>

        <div className="mt-10 space-y-5">
          <Suspense fallback={<LoadingState />}>
            <ChangeEmailForm />
          </Suspense>
        </div>
      </div>
    </main>
  )
}