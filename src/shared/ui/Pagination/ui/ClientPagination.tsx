'use client';

import { useRouter, useSearchParams } from "next/navigation"
import { Pagination } from "./Pagination"
import { useCurrentPath } from "@/shared/hooks"

interface ClientPaginationProps {
  currentPage: number
  totalPages: number
  pageParam?: string
}

export const ClientPagination = ({
  currentPage,
  totalPages,
  pageParam,
}: ClientPaginationProps) => {
  const router = useRouter()
  const pathname = useCurrentPath()
  const searchParams = useSearchParams()

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams?.toString())
    params.set(pageParam ?? "page", String(page))
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  )
}