import { BlackButton } from "@/shared/ui"

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
        <BlackButton type="button" onClick={onClick} disabled={disabled} className={className}>
            {label}
        </BlackButton>
    )
}
