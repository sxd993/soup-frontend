"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { Badge, RightArrow } from "@/shared/ui";
import { useCatalogFiltersStore } from "@/widgets/Catalog/Filters/model/store/useCatalogFiltersStore"
import type { ContractorsTypes } from "../model/types/contractors.types";

type ContractorsCardProps = {
    contractor: ContractorsTypes;
};

export const ContractorsCard = ({ contractor }: ContractorsCardProps) => {
    const router = useRouter()
    const setSelectedService = useCatalogFiltersStore((state) => state.setSelectedService)

    const handleBadgeClick = (badge: string) => {
        setSelectedService({ category: contractor.title, service: badge })
        router.push("/catalog")
    }

    return (
        <div className="flex flex-col gap-6 rounded-2xl bg-white p-5 justify-between">
            {/* Верхний заголовок */}
            <div className="flex items-center justify-between gap-3">
                <h3 className="text-2xl font-semibold leading-tight text-gray-900">
                    {contractor.title}
                </h3>
                <Link href="#">
                    <button className="w-7 h-7 bg-primary hover:bg-accent transition-all duration-300 rounded-full flex items-center justify-center cursor-pointer">
                        <RightArrow />
                    </button>
                </Link>
            </div>

            {/* Бейджы услуг */}
            <div className="flex flex-wrap gap-2">
                {contractor.badges.map((badge) => (
                    <button
                        key={badge}
                        type="button"
                        onClick={() => handleBadgeClick(badge)}
                        className="rounded-full"
                    >
                        <Badge badge={badge} />
                    </button>
                ))}
            </div>
        </div>
    );
};
