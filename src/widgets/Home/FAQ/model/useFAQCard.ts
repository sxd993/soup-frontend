import { useState, useEffect, useRef } from "react"
import { FAQItem } from "./types"

interface UseFAQCardProps {
    item: FAQItem
    defaultOpen?: boolean
    isPreviousOpen?: boolean
    isFirst?: boolean
    isSecond?: boolean
    isLast?: boolean
    onToggle?: (isOpen: boolean) => void
}

export const useFAQCard = ({
    item,
    defaultOpen = false,
    isPreviousOpen = false,
    isFirst = false,
    isSecond = false,
    isLast = false,
    onToggle
}: UseFAQCardProps) => {
    const [isOpen, setIsOpen] = useState(defaultOpen)
    const contentRef = useRef<HTMLDivElement>(null)
    const [contentHeight, setContentHeight] = useState(0)

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight)
        }
    }, [item.answer])

    useEffect(() => {
        setIsOpen(defaultOpen)
    }, [defaultOpen])

    const handleToggle = () => {
        const newState = !isOpen
        setIsOpen(newState)
        onToggle?.(newState)
    }

    const getBorderRadius = (): string => {
        if (isOpen) {
            if (isFirst) {
                return 'rounded-[20px]'
            } else if (isSecond) {
                return isLast ? 'rounded-[20px]' : 'rounded-t-[20px] rounded-b-none'
            } else if (isLast) {
                return isPreviousOpen ? 'rounded-b-[20px] rounded-t-none' : 'rounded-[20px]'
            } else {
                return isPreviousOpen ? 'rounded-none' : 'rounded-t-[20px] rounded-b-none'
            }
        } else {
            if (isSecond) {
                return 'rounded-[20px]'
            } else if (isPreviousOpen) {
                return 'rounded-b-[20px] rounded-t-none'
            } else {
                return 'rounded-[20px]'
            }
        }
    }

    const cardStyle = {
        transition: 'border-radius 300ms cubic-bezier(0.4, 0, 0.2, 1), margin-bottom 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        marginBottom: isOpen && isFirst 
            ? `-${contentHeight}px` 
            : isOpen && isLast 
            ? '-24px' 
            : '0px'
    }

    const contentStyle = {
        transition: 'max-height 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        maxHeight: isOpen ? `${contentHeight}px` : '0px',
        opacity: isOpen ? 1 : 0
    }

    return {
        isOpen,
        contentRef,
        handleToggle,
        borderRadius: getBorderRadius(),
        cardStyle,
        contentStyle
    }
}