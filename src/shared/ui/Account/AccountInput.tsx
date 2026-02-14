import type { InputHTMLAttributes } from "react"

interface AccountInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
}

export const AccountInput = ({
    placeholder,
    type = "text",
    className = "",
    ...rest
}: AccountInputProps) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`h-full w-full focus-visible:outline-none leading-[140%] font-medium text-base placeholder:text-[#c5c2c2] ${className}`}
            {...rest}
        />
    )
}
