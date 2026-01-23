"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useCurrentPath } from "@/shared/hooks"

type UseOrdersPaginationArgs = {
    totalItems: number
    pageSize: number
    pageParam?: string
}

export const useOrdersPagination = ({
    totalItems,
    pageSize,
    pageParam = "page",
}: UseOrdersPaginationArgs) => {
    const router = useRouter()
    const pathname = useCurrentPath()
    const searchParams = useSearchParams()
    const [isExpanded, setIsExpanded] = useState(false)
    const [visibleCount, setVisibleCount] = useState(pageSize)

    const totalPages = Math.max(1, Math.ceil(totalItems / pageSize))
    const currentPageParam = Number(searchParams?.get(pageParam) ?? "1")
    const pageFromQuery =
        Number.isNaN(currentPageParam) || currentPageParam < 1
            ? 1
            : Math.floor(currentPageParam)
    const currentPage = Math.min(pageFromQuery, totalPages)

    const setPage = (page: number) => {
        const nextPage = Math.max(1, page)
        const params = new URLSearchParams(searchParams?.toString())
        params.set(pageParam, String(nextPage))
        router.push(`${pathname}?${params.toString()}`, { scroll: false })
        setIsExpanded(false)
        setVisibleCount(pageSize)
    }

    const showMore = () => {
        if (currentPage >= totalPages) return
        const nextPage = Math.min(currentPage + 1, totalPages)
        const params = new URLSearchParams(searchParams?.toString())
        params.set(pageParam, String(nextPage))
        router.push(`${pathname}?${params.toString()}`, { scroll: false })
        setIsExpanded(true)
        setVisibleCount(Math.min(nextPage * pageSize, totalItems))
    }

    return {
        queryPage: pageFromQuery,
        currentPage,
        totalPages,
        isExpanded,
        visibleCount,
        setPage,
        showMore,
        canShowMore: currentPage < totalPages,
        pageParam,
    }
}
