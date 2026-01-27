'use client'

import { Button, Input } from '@/shared/ui'
import { StateProvider } from '@/app/providers/State/StateProvider'
import { AUTH_MESSAGES } from '@/entities/Auth'
import { useResetPassword } from '@/features/Auth/resetPassword'

export const ResetPasswordForm = () => {
  const {
    token,
    register,
    handleSubmit,
    getValues,
    onSubmit,
    isBusy,
    errors,
    serverError,
  } = useResetPassword()

  if (!token) {
    return (
      <div className="p-4 rounded-lg bg-red-50 border border-red-200">
        <p className="text-sm text-red-600 text-center">
          {AUTH_MESSAGES.resetPassword.missingToken}
        </p>
      </div>
    )
  }

  const formContent = (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      {/* Ошибка сервера */}
      {serverError && (
        <div className="p-3 rounded-lg bg-red-50 border border-red-200">
          <p className="text-sm text-red-600 text-center">{serverError}</p>
        </div>
      )}

      {/* Новый пароль */}
      <Input
        type="password"
        placeholder="Новый пароль"
        {...register('password', { required: true, minLength: 6 })}
      />
      {errors.password && (
        <p className="text-xs text-red-600">
          {errors.password.type === 'minLength'
            ? AUTH_MESSAGES.resetPassword.passwordMin
            : 'Пароль'}
        </p>
      )}

      {/* Подтверждение пароля */}
      <Input
        type="password"
        placeholder="Подтверждение пароля"
        {...register('passwordConfirm', {
          required: true,
          validate: (value) =>
            value === getValues('password') ||
            AUTH_MESSAGES.resetPassword.passwordMismatch,
        })}
      />
      {errors.passwordConfirm && (
        <p className="text-xs text-red-600">
          {errors.passwordConfirm.message ?? 'Подтвердите пароль'}
        </p>
      )}

      {/* Кнопка отправки */}
      <div className="flex justify-center mt-5">
        <Button
          className="rounded-full bg-primary px-19 py-2 transition hover:bg-accent flex justify-center"
          type="submit"
          disabled={isBusy}
        >
          <p className="text-accent-senary font-semibold text-base leading-[140%]">
            {isBusy ? 'Изменение...' : 'Изменить пароль'}
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