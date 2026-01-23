"use client"

import { Button } from "@/shared/ui"
import { Pagination } from "@/shared/ui/Pagination/ui/Pagination"

type ReviewsPaginationControlsProps = {
  currentPage: number
  totalPages: number
  onShowMore: () => void
  canShowMore: boolean
  onPageChange: (page: number) => void
}

export const ReviewsPaginationControls = ({
  currentPage,
  totalPages,
  onShowMore,
  canShowMore,
  onPageChange,
}: ReviewsPaginationControlsProps) => {
  if (totalPages <= 1) {
    return null
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
      {canShowMore && (
        <Button type="button" onClick={onShowMore} className="px-12">
          Показать еще
        </Button>
      )}
    </div>
  )
}
