'use client';

import { useScrollToTop } from "../model/useScrollToTop"

interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
    const { scrollToTop } = useScrollToTop()

    const handlePageChange = (page: number) => {
        onPageChange(page)
        scrollToTop()
    }

    return (
        <div className="flex items-center justify-center gap-4">
            {pages.map((page) => (
                <button
                    key={page}
                    type="button"
                    onClick={() => handlePageChange(page)}
                    className={`font-semibold text-base transition-all duration-300 ${
                        currentPage === page
                            ? "w-8 h-8 rounded-full bg-accent text-accent-senary"
                            : "text-accent-quinary hover:text-accent-senary"
                    }`}
                >
                    {page}
                </button>
            ))}
            {currentPage < totalPages && (
                <button
                    type="button"
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="font-semibold text-base text-accent-quinary hover:text-accent-senary transition-all duration-300"
                >
                    Далее
                </button>
            )}
        </div>
    )
}