import type { ButtonHTMLAttributes, ReactNode } from 'react'

type BlackButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode
    className?: string
}

export const BlackButton = ({
    children,
    className = "",
    type = "button",
    disabled,
    ...props
}: BlackButtonProps) => {
    return (
        <button
            type={type}
            disabled={disabled}
            className={`cursor-pointer bg-accent-septenary text-white rounded-[20px] h-[40px] px-10 text-sm font-medium hover:bg-accent-secondary active:bg-accent-tertiary transition-all duration-300 text-center disabled:bg-accent-quaternary disabled:cursor-not-allowed ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
