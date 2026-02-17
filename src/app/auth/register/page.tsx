import { RegisterForm } from "@/widgets/Auth/RegisterForm";
import { AuthRedirect } from '@/widgets/Auth/AuthRedirect';
import { Suspense } from "react";
import { LoadingState } from "@/shared/ui";


export default function RegisterPage() {
    return (
        <Suspense fallback={<LoadingState />}>
            <main className="flex items-center justify-center pb-12 py-28 my-auto">
                <div className="w-full max-w-[520px] rounded-[40px] bg-white py-15 px-13">

                    {/* Заголовок */}
                    <h2 className="text-[28px] font-semibold leading-[110%] text-secondary sm:text-3xl text-center">
                        Регистрация
                    </h2>

                    <div className="mt-10 space-y-5">

                        {/* Форма регистрации */}
                        <RegisterForm />

                        {/* Перенаправление на регистрацию */}
                        <AuthRedirect />

                    </div>
                </div>
            </main>
        </Suspense>
    )
}