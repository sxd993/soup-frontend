import { useEffect, useRef } from "react"
import { FAQItem } from "../types/types"
import { useState } from "react"

interface UseFAQCardProps {
    item: FAQItem
    isOpen: boolean
    onToggle?: (isOpen: boolean) => void
}

export const useFAQCard = ({
    item,
    isOpen,
    onToggle
}: UseFAQCardProps) => {
    const contentRef = useRef<HTMLDivElement>(null)
    const [contentHeight, setContentHeight] = useState(0)

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight)
        }
    }, [item.answer])

    const handleToggle = () => {
        onToggle?.(!isOpen)
    }

    const cardStyle = { transition: 'border-radius 300ms cubic-bezier(0.4, 0, 0.2, 1)' }
    const contentStyle = {
        transition: 'max-height 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        maxHeight: isOpen ? `${contentHeight}px` : '0px',
        opacity: isOpen ? 1 : 0
    }

    return {
        isOpen,
        contentRef,
        handleToggle,
        borderRadius: 'rounded-[20px]',
        cardStyle,
        contentStyle
    }
}
