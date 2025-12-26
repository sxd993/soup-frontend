import { useMemo } from "react"

interface UsePaginationProps<T> {
    items: T[]
    itemsPerPage: number
    currentPage: number
}

export const usePagination = <T,>({ items, itemsPerPage, currentPage }: UsePaginationProps<T>) => {
    const paginatedItems = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage
        return items.slice(startIndex, endIndex)
    }, [items, itemsPerPage, currentPage])

    const totalPages = useMemo(() => {
        return Math.ceil(items.length / itemsPerPage)
    }, [items.length, itemsPerPage])

    return {
        paginatedItems,
        totalPages
    }
}