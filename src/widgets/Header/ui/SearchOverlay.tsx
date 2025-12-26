import { LeftArrow, SearchButton } from '@/shared/ui/icons'

type SearchOverlayProps = {
  isOpen: boolean
  onClose: () => void
}

export const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-30 bg-white">
      <div className="px-6 pt-6">
        <div className="flex items-center gap-3">
          <button type="button" aria-label="Назад" onClick={onClose}>
            <LeftArrow />
          </button>
          <label className="flex-1">
            <span className="sr-only">Поиск</span>
            <div className="relative">
              <SearchButton className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 text-secondary" />
              <input
                type="text"
                placeholder="Поиск"
                className="w-full h-11 rounded-full bg-[#EBE7DF] pl-14 pr-4 text-secondary text-base placeholder:text-secondary focus:outline-none"
              />
            </div>
          </label>
        </div>
      </div>
    </div>
  )
}
