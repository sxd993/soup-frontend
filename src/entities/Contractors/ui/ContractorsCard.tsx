import Link from 'next/link'
import { Badge, RightArrow } from "@/shared/ui";
import type { ContractorsTypes } from "../model/types/contractors.types";

type ContractorsCardProps = {
    contractor: ContractorsTypes;
};

export const ContractorsCard = ({ contractor }: ContractorsCardProps) => {
    return (
        <div className="flex flex-col gap-6 rounded-2xl bg-white p-5 shadow-sm justify-between">
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
                    <Badge key={badge} badge={badge} />
                ))}
            </div>
        </div>
    );
};