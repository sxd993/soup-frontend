'use client'

import { CloseIcon } from './Close'

type CloseSearchButtonProps = {
  onClose: () => void
}

export const CloseSearchButton = ({ onClose }: CloseSearchButtonProps) => {
  return (
    <button
      type="button"
      aria-label="Закрыть поиск"
      onClick={onClose}
      className="absolute right-3 top-1/2 -translate-y-1/2"
    >
      <CloseIcon className="w-4 h-4" />
    </button>
  )
}