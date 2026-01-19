'use client';

import { PaginationArrowLeft, PaginationArrowRight } from "@/shared/ui"
import { usePagination } from "../model/usePagination"

interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    const {
        handlePageChange,
        isPrevDisabled,
        isNextDisabled,
        pageItems,
    } = usePagination({
        currentPage,
        totalPages,
        onPageChange,
    })

    return (
        <div className="flex items-center justify-center gap-4">
            <button
                type="button"
                onClick={() => handlePageChange(currentPage - 1)}
                className={`flex items-center justify-center ${
                    isPrevDisabled ? "cursor-not-allowed" : "cursor-pointer"
                }`}
                aria-label="Предыдущая страница"
                disabled={isPrevDisabled}
            >
                <PaginationArrowLeft />
            </button>

            {pageItems.map((item) => {
                if (item === "ellipsis") {
                    return (
                        <span
                            key="ellipsis"
                            className="text-accent-quinary text-[22px] font-bold"
                        >
                            ...
                        </span>
                    )
                }

                return (
                    <button
                        key={item}
                        type="button"
                        onClick={() => handlePageChange(item)}
                        className={`font-bold text-[22px] transition-all duration-300 cursor-pointer ${
                            currentPage === item
                                ? "text-primary"
                                : "text-accent-quinary hover:text-primary"
                        }`}
                    >
                        {item}
                    </button>
                )
            })}

            <button
                type="button"
                onClick={() => handlePageChange(currentPage + 1)}
                className={`flex items-center justify-center ${
                    isNextDisabled ? "cursor-not-allowed" : "cursor-pointer"
                }`}
                aria-label="Следующая страница"
                disabled={isNextDisabled}
            >
                <PaginationArrowRight />
            </button>
        </div>
    )
}