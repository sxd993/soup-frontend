interface CompanyAccountAddButtonProps {
    label?: string;
    onClick: () => void;
    disabled?: boolean;
    className?: string;
}

export const CompanyAccountAddButton = ({
    label = "Добавить",
    onClick,
    disabled = false,
    className = "",
}: CompanyAccountAddButtonProps) => {
    return (
        <button
            type="button"
            className={`bg-[#2f2f2f] text-white rounded-[20px] h-[40px] px-6 text-sm font-medium disabled:opacity-50 ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    )
}
