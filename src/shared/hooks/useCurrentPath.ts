'use client'

import { usePathname } from "next/navigation"

export const useCurrentPath = () => {
    const currentPath = usePathname();
    return currentPath
}
