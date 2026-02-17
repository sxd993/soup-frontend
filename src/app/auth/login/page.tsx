import { LoginForm } from '@/widgets/Auth/LoginForm'
import { AuthRedirect } from '@/widgets/Auth/AuthRedirect';
import { Suspense } from "react";
import { LoadingState } from '@/shared/ui';

export default function LoginPage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <main className="flex items-center justify-center pb-12 py-28 my-auto">
        <div className="w-full max-w-[520px] rounded-[40px] bg-white py-15 px-13">

          {/* Заголовок */}
          <h2 className="text-[28px] font-semibold leading-[110%] text-secondary sm:text-3xl text-center">
            Вход в аккаунт
          </h2>

          <div className="mt-10 space-y-5">

            {/* Форма входа */}
            <LoginForm />

            {/* Перенаправление на регистрацию */}
            <AuthRedirect />

          </div>
        </div>
      </main>
    </Suspense>
  )
}
