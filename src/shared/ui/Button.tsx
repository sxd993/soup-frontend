interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
    className?: string
}

export const Button = ({ children, onClick, className = "" }: ButtonProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`text-accent-senary font-semibold bg-primary hover:bg-accent transition-all duration-300 text-base px-15 py-2.5 rounded-[50px] text-center ${className}`}
        >
            {children}
        </button>
    )
}