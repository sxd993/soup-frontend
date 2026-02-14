export interface AccountSelectOption {
    id: string;
    label: string;
    icon?: React.ReactNode;
    onSelect: () => void;
}

interface AccountSelectProps {
    options: AccountSelectOption[];
    className?: string;
}

export const AccountSelect = ({ options, className = "" }: AccountSelectProps) => {
    return (
        <div className={`bg-white rounded-[10px] border border-[#e3e3e3] overflow-hidden w-[180px] ${className}`}>
            {options.map((option) => (
                <button
                    key={option.id}
                    type="button"
                    className="w-full cursor-pointer flex items-center gap-3 px-4 py-2 text-sm hover:bg-[#f5f5f5]"
                    onClick={option.onSelect}
                >
                    {option.icon}
                    {option.label}
                </button>
            ))}
        </div>
    )
}
