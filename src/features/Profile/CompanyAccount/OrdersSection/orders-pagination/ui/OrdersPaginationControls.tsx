"use client"

import { Button } from "@/shared/ui"
import { Pagination } from "@/shared/ui/Pagination/ui/Pagination"

type OrdersPaginationControlsProps = {
    currentPage: number
    totalPages: number
    onShowMore: () => void
    canShowMore: boolean
    onPageChange: (page: number) => void
}

export const OrdersPaginationControls = ({
    currentPage,
    totalPages,
    onShowMore,
    canShowMore,
    onPageChange,
}: OrdersPaginationControlsProps) => {
    if (totalPages <= 1) {
        return null
    }

    return (
        <div className="flex flex-col items-center gap-6">
            {canShowMore && (
                <Button
                    type="button"
                    onClick={onShowMore}
                    className="px-12 w-full bg-accent-septenary! text-white!"
                >
                    Показать еще
                </Button>
            )}
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </div>
    )
}
