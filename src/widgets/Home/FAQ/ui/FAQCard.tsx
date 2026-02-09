"use client"

import { useFAQCard } from "../model/hooks/useFAQCard"
import { FAQItem } from "../model/types/types"
import { ArrowDown, ArrowUp } from "@/shared/ui"

interface FAQCardProps {
    item: FAQItem
    isOpen: boolean
    onToggle?: (isOpen: boolean) => void
}

export const FAQCard = ({ item, isOpen, onToggle }: FAQCardProps) => {
    const { contentRef, handleToggle, borderRadius, cardStyle, contentStyle } = useFAQCard({
        item,
        isOpen,
        onToggle
    })

    return (
        <div
            role="button"
            tabIndex={0}
            className={`cursor-pointer bg-white py-4.5 px-5 relative ${borderRadius}`}
            style={cardStyle}
            onClick={handleToggle}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    handleToggle()
                }
            }}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Свернуть" : "Развернуть"}
        >
            <div className="flex items-start justify-between gap-4 relative">
                <h3
                    className={`text-[22px] font-bold leading-[105%] text-secondary flex-1`}
                >
                    {item.question}
                </h3>
                <span className="shrink-0" aria-hidden>
                    {isOpen ? <ArrowUp /> : <ArrowDown />}
                </span>
            </div>
            <div className="overflow-hidden" style={contentStyle}>
                <div ref={contentRef}>
                    <p className="lg:text-[16px] font-regular text-secondary leading-relaxed">
                        {item.answer}
                    </p>
                </div>
            </div>
        </div>
    )
}