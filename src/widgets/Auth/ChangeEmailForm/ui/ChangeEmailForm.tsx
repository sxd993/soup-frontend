'use client'

import { Button, Input } from '@/shared/ui'
import { useChangeEmail } from '@/features/Auth/changeEmail'

export const ChangeEmailForm = () => {
  const {
    verificationId,
    newEmail,
    setNewEmail,
    serverError,
    isBusy,
    onSubmit,
    isFormValid,
  } = useChangeEmail()

  if (!verificationId) {
    return (
      <div className="p-4 rounded-lg bg-red-50 border border-red-200">
        <p className="text-sm text-red-600 text-center">Отсутствует ID сессии подтверждения</p>
      </div>
    )
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
      {serverError && (
        <div className="p-3 rounded-lg bg-red-50 border border-red-200">
          <p className="text-sm text-red-600 text-center">{serverError}</p>
        </div>
      )}

      <Input
        type="email"
        placeholder="E-mail"
        className="text-secondary"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />

      <div className="flex justify-center mt-5">
        <Button
          onClick={onSubmit}
          disabled={isBusy || !isFormValid}
          className="rounded-full px-19 py-2 flex justify-center"
          type="submit"
        >
          <p className="text-accent-senary font-semibold text-base leading-[140%]">
            {isBusy ? 'Отправка...' : 'Отправить код подтверждения'}
          </p>
        </Button>
      </div>
    </form>
  )
}