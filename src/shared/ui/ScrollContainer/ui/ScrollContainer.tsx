import type { HTMLAttributes } from "react"

interface ScrollContainerProps extends HTMLAttributes<HTMLDivElement> {}

export const ScrollContainer = ({ className = "", ...props }: ScrollContainerProps) => {
    return (
        <div className={`overflow-y-auto ${className}`} {...props} />
    )
}
