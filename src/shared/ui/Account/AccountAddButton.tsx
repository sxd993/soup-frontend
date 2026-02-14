import { BlackButton } from "@/shared/ui/Controls/BlackButton"

interface AccountAddButtonProps {
    label?: string;
    onClick: () => void;
    disabled?: boolean;
    className?: string;
}

export const AccountAddButton = ({
    label = "Добавить",
    onClick,
    disabled = false,
    className = "",
}: AccountAddButtonProps) => {
    const defaultClassName = "mt-3 bg-accent-septenary hover:bg-secondary disabled:bg-[#C5C2C2]! text-base leading-[140%]"

    return (
        <BlackButton
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={`${defaultClassName} ${className}`.trim()}
        >
            {label}
        </BlackButton>
    )
}
