'use client'

import { Button, Input } from '@/shared/ui'
import { StateProvider } from '@/app/providers/State/StateProvider'
import { AUTH_MESSAGES } from '@/entities/Auth'
import { useForgotPassword } from '@/features/Auth/forgotPassword'

export const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    onSubmit,
    isBusy,
    errors,
    serverError,
    emailPattern,
    isFormValid,
  } = useForgotPassword()

  const formContent = (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      {/* Ошибка сервера */}
      {serverError && (
        <div className="p-3 rounded-lg bg-red-50 border border-red-200">
          <p className="text-sm text-red-600 text-center">{serverError}</p>
        </div>
      )}

      {/* Почта */}
      <Input
        type="email"
        placeholder="E-mail"
        className="text-secondary"
        {...register('email', { required: true, pattern: emailPattern })}
      />
      {errors.email && (
        <p className="text-xs text-red-600">
          {errors.email.type === 'pattern'
            ? AUTH_MESSAGES.forgotPassword.invalidEmail
            : AUTH_MESSAGES.forgotPassword.missingEmail}
        </p>
      )}

      {/* Кнопка отправки */}
      <div className="flex justify-center mt-5">
        <Button
          className="rounded-full px-19 py-2 flex justify-center"
          type="submit"
          disabled={isBusy || !isFormValid}
        >
          <p className="text-accent-senary font-semibold text-base leading-[140%]">
            {isBusy ? 'Отправка...' : 'Отправить'}
          </p>
        </Button>
      </div>
    </form>
  )

  return (
    <StateProvider
      isLoading={isBusy}
      isError={Boolean(serverError)}
      loadingComponent={formContent}
      errorComponent={formContent}
    >
      {formContent}
    </StateProvider>
  )
}