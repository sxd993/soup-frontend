import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode
    className?: string
}

export const Button = ({
    children,
    className = "",
    type = "button",
    disabled,
    ...props
}: ButtonProps) => {
    return (
        <button
            type={type}
            disabled={disabled}
            className={`text-accent-senary font-semibold bg-primary hover:bg-accent transition-all duration-300 text-base px-15 py-2 rounded-[50px] text-center disabled:cursor-not-allowed disabled:bg-[#D3EBBB] ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
