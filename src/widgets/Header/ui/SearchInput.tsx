'use client'

import { SearchIcon } from '@/shared/index'

export const SearchInput = () => {
  return (
    <div className="relative block md:hidden">
      <SearchIcon className="absolute left-1 top-1/2 -translate-y-1/2 w-9 h-9" />
      <input
        type="text"
        placeholder="Поиск"
        className="w-full pl-10 pr-4 py-3 rounded-[20px] bg-background focus:outline-none font-semibold text-sm"
        style={{ color: '#000000' }}
      />
    </div>
  )
}