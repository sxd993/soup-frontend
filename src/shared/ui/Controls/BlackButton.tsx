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
            className={`cursor-pointer bg-accent-septenary text-white rounded-[20px] h-[40px] px-10 text-sm font-medium hover:bg-secondary active:bg-[#201F1F] transition-colors duration-200 text-center disabled:bg-[#C5C2C2] disabled:cursor-not-allowed ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
