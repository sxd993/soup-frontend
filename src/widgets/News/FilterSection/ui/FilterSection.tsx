import { Badge } from "@/shared/ui/Badge"
import { FILTERS_BADGES } from "../model/filterBadge"
import { SortIcon } from "@/shared/ui/icons/SortIcon"

export const FilterSection = () => {
    return (
        <div className="w-full">
            <div className="flex justify-between items-center">
                {/* Бейджы категорий */}
                <div className="flex flex-row gap-4">
                    {FILTERS_BADGES.map(b => (
                        <Badge key={b.id} badge={b.title} />
                    ))}
                </div>
                {/* Сортировка */}
                <div className="flex gap-2 items-center">
                    <p className="text-secondary font-normal leading-[120%] text-sm">за все время</p>
                    <SortIcon />
                </div>
            </div>
        </div>
    )
}