'use client'

import { LogoutIcon } from '@/shared/ui'
import { useLogoutRedirect } from '../model/hooks/useLogoutRedirect'

type LogoutIconButtonProps = {
  className?: string
  iconClassName?: string
  ariaLabel?: string
}

export function LogoutIconButton({
  className,
  iconClassName,
  ariaLabel = 'Выйти',
}: LogoutIconButtonProps) {
  const { handleLogout, isPending } = useLogoutRedirect()

  return (
    <button
      type="button"
      className={className}
      aria-label={ariaLabel}
      onClick={handleLogout}
      disabled={isPending}
    >
      <LogoutIcon className={iconClassName} />
    </button>
  )
}