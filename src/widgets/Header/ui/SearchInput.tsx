'use client'

import { Search } from "@/shared/ui/icons/Search"

export const SearchInput = () => {
  return (
    <div className="relative hidden md:block">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2" />
      <input
        type="text"
        placeholder="Поиск"
        className="w-full pl-10 pr-4 py-3 rounded-[20px] bg-background focus:outline-none font-semibold text-sm placeholder:text-[#535353]! placeholder:font-normal!"
      />
    </div>
  )
}