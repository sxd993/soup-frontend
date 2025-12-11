import { RightArrow } from "@/shared/ui/icons/RighArrow";
import { ContactorsTypes } from "../model/ContactorsTypes";

type ContractorsCardProps = {
    contractor: ContactorsTypes;
};

export const ContractorsCard = ({ contractor }: ContractorsCardProps) => {
    return (
        <div className="flex flex-col gap-6 rounded-2xl bg-white p-5 shadow-sm justify-between">
            {/* Верхний заголовок */}
            <div className="flex items-center justify-between gap-3">
                <h3 className="text-2xl font-semibold leading-tight text-gray-900">
                    {contractor.title}
                </h3>
                <RightArrow />
            </div>

            {/* Бейджы услуг */}
            <div className="flex flex-wrap gap-2">
                {/* Текст внутри бейджа */}
                {contractor.bages.map((badge) => (
                    <span
                        key={badge}
                        className="rounded-full bg-[#EBE7DF] px-4 py-1 text-xs font-medium leading-[150%] tracking-normal text-secondary"
                    >
                        {badge}
                    </span>
                ))}
            </div>
        </div>
    );
};
