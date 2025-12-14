import { FAQItem } from "./types"

interface UseFAQSectionProps {
    items: FAQItem[]
    openIndices: Set<number>
}

export const useFAQSection = ({ items, openIndices }: UseFAQSectionProps) => {
    const getCardProps = (index: number) => {
        const isOpen = openIndices.has(index)
        const isPreviousOpen = index > 0 && openIndices.has(index - 1)
        const isNextOpen = index < items.length - 1 && openIndices.has(index + 1)
        const isFirst = index === 0
        const isSecond = index === 1
        const isLast = index === items.length - 1

        const shouldRemoveGap = isOpen && !isFirst
        const gapSize = isFirst ? '76px' : '24px'

        const wrapperStyle = {
            paddingBottom: index < items.length - 1 && !shouldRemoveGap ? gapSize : '0px',
            transition: 'padding-bottom 300ms cubic-bezier(0.4, 0, 0.2, 1)'
        }

        return {
            isOpen,
            isPreviousOpen,
            isNextOpen,
            isFirst,
            isSecond,
            isLast,
            defaultOpen: index === 0,
            wrapperStyle
        }
    }

    return { getCardProps }
}