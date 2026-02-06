import { Button } from "@/shared/ui"
import type { CompanyTariffCardProps } from "../model/types/company-tariff-card.types"

type CompanyTariffCardType = {
    card: CompanyTariffCardProps
}

export const CompanyTariffCard = ({ card }: CompanyTariffCardType) => {
    return (
        <div
            className={`flex h-full flex-col rounded-[24px] border bg-white p-5 ${card.isSelected ? "border-primary border-[3px]" : "border-[#C7C9CD]"
                }`}
        >
            {/* Основной блок: название и преимущества */}
            <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold text-secondary">{card.title}</h3>
                <span className="h-px w-full bg-[#C7C9CD]" />
                <ul className="flex flex-col gap-3 text-secondary">
                    {card.featureItems.map((item) => (
                        <li key={item} className="text-base">
                            {item}
                        </li>
                    ))}
                </ul>
                <span className="h-px w-full bg-[#C7C9CD]" />
            </div>
            {/* Нижний блок: цена и действие */}
            <div className="mt-auto flex flex-col items-center gap-4 pt-6">
                <p className="text-lg font-semibold text-secondary">{card.priceLabel}</p>
                {card.isSelected ? (
                    <span className="text-primary font-semibold">{card.actionLabel}</span>
                ) : (
                    <Button className="px-10!">{card.actionLabel}</Button>
                )}
            </div>
        </div>
    )
}
