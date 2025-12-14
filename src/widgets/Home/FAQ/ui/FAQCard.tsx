"use client"

import { FAQItem } from "../model/types"
import { useFAQCard } from "../model/useFAQCard"
import { ArrowDown, ArrowUp } from "@/shared/ui/icons"

interface FAQCardProps {
    item: FAQItem
    defaultOpen?: boolean
    isPreviousOpen?: boolean
    isFirst?: boolean
    isSecond?: boolean
    isLast?: boolean
    onToggle?: (isOpen: boolean) => void
}

export const FAQCard = ({ item, defaultOpen, isPreviousOpen, isFirst, isSecond, isLast, onToggle }: FAQCardProps) => {
    const { isOpen, contentRef, handleToggle, borderRadius, cardStyle, contentStyle } = useFAQCard({
        item,
        defaultOpen,
        isPreviousOpen,
        isFirst,
        isSecond,
        isLast,
        onToggle
    })

    return (
        <div className={`bg-white py-4 px-5 relative ${borderRadius}`} style={cardStyle}>
            <div 
                className="flex items-start justify-between gap-4 cursor-pointer relative"
                onClick={handleToggle}
            >
                <h3 className="lg:text-[22px] font-bold text-secondary flex-1">
                    {item.question}
                </h3>
                <button 
                    className="shrink-0"
                    aria-label={isOpen ? "Свернуть" : "Развернуть"}
                >
                    {isOpen ? <ArrowUp /> : <ArrowDown />}
                </button>
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