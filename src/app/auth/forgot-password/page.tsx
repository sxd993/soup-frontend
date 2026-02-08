import { ForgotPasswordForm } from '@/widgets/Auth/ForgotPasswordForm'

export default function ForgotPasswordPage() {
  return (
    <main className="flex items-center justify-center pb-12 py-28 my-auto">
      <div className="w-full max-w-[520px] rounded-[40px] bg-white py-15 px-13">
        {/* Заголовок */}
        <h2 className="text-[28px] font-semibold leading-[110%] text-secondary sm:text-3xl text-center">
          Восстановление пароля
        </h2>

        <p className="mt-10 text-[14px] font-regular text-accent-septenary leading-[130%]">
          Введите e-mail, используемый для ввода. Мы вышлем письмо с инструкцией
        </p>

        <div className="mt-10 space-y-5">
          {/* Форма восстановления */}
          <ForgotPasswordForm />
        </div>
      </div>
    </main>
  )
}