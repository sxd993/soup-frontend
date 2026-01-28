'use client';

import { useState } from "react"
import { Search } from "@/shared/ui"

export const ContestSearchInput = () => {
    const [searchValue, setSearchValue] = useState("")

    return (
        <div className="relative">
            <Search className="absolute w-4 h-4 left-3 top-1/2 -translate-y-1/2" />
            <input
                type="text"
                placeholder="поиск по названию"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-[20px] bg-white focus:outline-none font-semibold text-sm placeholder:text-accent-septenary placeholder:font-normal"
            />
        </div>
    )
}