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

const SelectedIcon = () => (
    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.69471 0.292787C9.88218 0.480314 9.9875 0.734622 9.9875 0.999786C9.9875 1.26495 9.88218 1.51926 9.69471 1.70679L4.69471 6.70679C4.50718 6.89426 4.25288 6.99957 3.98771 6.99957C3.72255 6.99957 3.46824 6.89426 3.28071 6.70679L0.280712 3.70679C0.0985537 3.51818 -0.00224062 3.26558 3.78026e-05 3.00339C0.00231622 2.74119 0.107485 2.49038 0.292893 2.30497C0.478301 2.11956 0.729114 2.01439 0.99131 2.01211C1.25351 2.00983 1.50611 2.11063 1.69471 2.29279L3.98771 4.58579L8.28071 0.292787C8.46824 0.105316 8.72255 0 8.98771 0C9.25288 0 9.50718 0.105316 9.69471 0.292787Z"
            fill="#8BC652"
        />
    </svg>
)

export const FilterMenu = ({ items, selectedId, onSelect, className }: FilterMenuProps) => {
    return (
        <div
            className={`absolute top-full mt-2 right-0 w-[200px] z-10 overflow-hidden rounded-[18px] border border-[#E5E5E5] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] ${className ?? ""}`}
        >
            {items.map((item, index) => {
                const isSelected = selectedId === item.id
                return (
                    <button
                        key={item.id}
                        type="button"
                        onClick={() => onSelect?.(item.id)}
                        className={`flex w-full items-center justify-between px-4 py-2 text-left text-sm font-medium text-[#171717] transition-colors hover:bg-[#F5F5F5] ${index === 0 ? "rounded-t-[18px]" : ""} ${index === items.length - 1 ? "rounded-b-[18px]" : ""} ${
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
