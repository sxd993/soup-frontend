import { SelectedIcon } from "@/shared/ui"

interface FilterMenuItem {
    id: number
    title: string
}

interface FilterMenuProps {
    items: FilterMenuItem[]
    selectedId?: number
    onSelect?: (id: number) => void
    className?: string
}

export const FilterMenu = ({ items, selectedId, onSelect, className }: FilterMenuProps) => {
    return (
        <div
            className={`absolute top-full mt-2 right-0 z-20 w-50 overflow-hidden rounded-[18px] border border-[#E5E5E5] bg-[#FFFFFF] shadow-md ${className ?? ""}`}
        >
            {items.map((item, index) => {
                const isSelected = selectedId === item.id
                return (
                    <button
                        key={item.id}
                        type="button"
                        onClick={() => onSelect?.(item.id)}
                        className={`flex w-full items-center justify-between px-4 py-2 text-left text-sm font-medium text-[#171717] transition-colors hover:bg-[#F5F5F5] cursor-pointer ${index === 0 ? "rounded-t-[18px]" : ""} ${index === items.length - 1 ? "rounded-b-[18px]" : ""} ${
                            isSelected ? "bg-[#F6F6F6]" : ""
                        }`}
                    >
                        <span>{item.title}</span>
                        <span className={`${isSelected ? "opacity-100" : "opacity-0"}`}>
                            <SelectedIcon />
                        </span>
                    </button>
                )
            })}
        </div>
    )
}