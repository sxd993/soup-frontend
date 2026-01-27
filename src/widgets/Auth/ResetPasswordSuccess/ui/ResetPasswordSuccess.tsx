'use client'

import { Button } from '@/shared/ui'
import { useProfileRedirect } from '@/features/Auth/profileRedirect'

export const ResetPasswordSuccess = () => {
  const { onGoProfile } = useProfileRedirect()

  return (
    <div className="flex flex-col items-center justify-center gap-10 text-center py-12">
      <p className="text-[28px] font-semibold leading-[110%] text-secondary">
        Ваш пароль успешно
        <br />
        изменен
      </p>
      <Button
        className="rounded-full bg-primary px-19 py-2 transition hover:bg-accent flex justify-center"
        type="button"
        onClick={onGoProfile}
      >
        <p className="text-accent-senary font-semibold text-base leading-[140%]">
          В профиль
        </p>
      </Button>
    </div>
  )
}