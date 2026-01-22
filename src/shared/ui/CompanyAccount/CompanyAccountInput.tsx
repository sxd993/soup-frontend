import type { InputHTMLAttributes } from "react"

interface CompanyAccountInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
}

export const CompanyAccountInput = ({
    placeholder,
    type = 'text',
    className = "",
    ...rest
}: CompanyAccountInputProps) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`h-full focus-visible:outline-none leading-[140%] font-medium text-base placeholder:text-[#c5c2c2] ${className}`}
            {...rest}
        />
    )
}
