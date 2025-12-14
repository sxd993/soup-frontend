import { useState } from "react"

export const useFAQState = (initialOpenIndex: number = 0) => {
    const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([initialOpenIndex]))

    const handleToggle = (index: number, isOpen: boolean) => {
        setOpenIndices(prev => {
            const newSet = new Set(prev)
            if (isOpen) {
                newSet.add(index)
            } else {
                newSet.delete(index)
            }
            return newSet
        })
    }

    return { openIndices, handleToggle }
}