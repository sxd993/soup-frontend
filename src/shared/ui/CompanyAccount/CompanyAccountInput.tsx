interface CompanyAccountInputProps {
    placeholder: string;
    type?: string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const CompanyAccountInput = ({ placeholder, type = 'text', value, onChange }: CompanyAccountInputProps) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="h-full focus-visible:outline-none leading-[140%] font-medium text-base placeholder:text-[#c5c2c2]"
            value={value}
            onChange={onChange}
        />
    )
}
