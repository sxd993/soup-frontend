"use client"

import { ArrowDown } from "@/shared/ui"
import { useShallow } from "zustand/shallow";
import { REVIEW_SORT_OPTIONS } from "../model/const/reviewSortOptions"
import { useCompanyReviewsFilterStore } from "../model/store/useCompanyReviewsFilterStore"

export const CompanyReviewsFilter = () => {
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

    const selectedOption = REVIEW_SORT_OPTIONS.find((option) => option.id === selectedSortId)

    return (
        <div className="relative w-fit">
            <button
                type="button"
                onClick={toggleOpen}
                className="flex items-center gap-2 rounded-full border border-[#E5E0D6] bg-white px-4 py-2 text-sm font-semibold text-secondary"
                aria-expanded={isOpen}
            >
                {selectedOption?.label ?? "Сортировка"}
                <span className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}>
                    <ArrowDown />
                </span>
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 z-10 mt-2 w-[260px] overflow-hidden rounded-[18px] border border-[#E5E5E5] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
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
                                className={`flex w-full items-center justify-between px-4 py-2 text-left text-sm font-medium text-[#171717] transition-colors hover:bg-[#F5F5F5] ${index === 0 ? "rounded-t-[18px]" : ""
                                    } ${index === REVIEW_SORT_OPTIONS.length - 1 ? "rounded-b-[18px]" : ""
                                    } ${isSelected ? "bg-[#F6F6F6]" : ""}`}
                            >
                                <span>{option.label}</span>
                                <span className={`${isSelected ? "text-primary" : "text-transparent"}`}>
                                    •
                                </span>
                            </button>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
