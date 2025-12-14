import { useMemo } from "react"

import { FAQItem } from "../types/types"

interface UseFAQSectionProps {
    items: FAQItem[]
    openIndices: Set<number>
}

export const useFAQSection = ({ items, openIndices }: UseFAQSectionProps) => {
    const cardProps = useMemo(
        () =>
            items.map((_, index) => ({
                isOpen: openIndices.has(index),
                wrapperStyle: {
                    paddingBottom: index < items.length - 1 ? '24px' : '0px'
                }
            })),
        [items, openIndices]
    )

    return { cardProps }
}
