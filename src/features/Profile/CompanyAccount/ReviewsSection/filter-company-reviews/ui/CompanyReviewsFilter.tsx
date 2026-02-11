"use client"

import { SortIcon } from "@/shared/ui"
import { useShallow } from "zustand/shallow";
import { REVIEW_SORT_OPTIONS } from "@/features/Profile/CompanyAccount/ReviewsSection/filter-company-reviews/model/const/reviewSortOptions"
import { useCompanyReviewsFilterStore } from "../model/store/useCompanyReviewsFilterStore";

export const CompanyReviewsFilter = () => {

    // Локальный стор для фильтров
    const { isOpen, selectedSortId, toggleOpen, setOpen, setSelectedSort } =
        useCompanyReviewsFilterStore(
            useShallow((state) => ({
                isOpen: state.isOpen,
                selectedSortId: state.selectedSortId,
                toggleOpen: state.toggleOpen,
                setOpen: state.setOpen,
                setSelectedSort: state.setSelectedSort,
            }))
        );

    // Выбранный вариант сортировки
    const selectedOption = REVIEW_SORT_OPTIONS.find((option) => option.id === selectedSortId)

    return (
        <div className="relative w-fit">
            <button
                type="button"
                onClick={toggleOpen}
                className="flex cursor-pointer items-center gap-2"
                aria-expanded={isOpen}
            >
                {selectedOption?.label ?? "Сортировка"}
                <span className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}>
                    <SortIcon />
                </span>
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 z-10 mt-2 w-[260px] overflow-hidden rounded-[18px] border border-[#E5E5E5] bg-white">
                    {REVIEW_SORT_OPTIONS.map((option, index) => {
                        const isSelected = option.id === selectedSortId
                        return (
                            <button
                                key={option.id}
                                type="button"
                                onClick={() => {
                                    setSelectedSort(option.id)
                                    setOpen(false)
                                }}
                                className={`flex w-full cursor-pointer items-center justify-between px-4 py-2 text-left text-sm font-medium text-[#171717] transition-colors hover:bg-[#F5F5F5] ${index === 0 ? "rounded-t-[18px]" : ""
                                    } ${index === REVIEW_SORT_OPTIONS.length - 1 ? "rounded-b-[18px]" : ""
                                    } ${isSelected ? "bg-[#F6F6F6]" : ""}`}
                            >
                                <span>{option.label}</span>
                            </button>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
