'use client';

import { StateProvider } from "@/app/providers/State/StateProvider"
import { SectionTitle } from "@/shared/ui"
import { useTariffPicker } from "../model/hooks/useTariffPicker"
import { CompanyTariffCard } from "@/entities/Profile/Company"
import { TariffPickerSkeleton } from "./TariffPickerSkeleton"

export const TariffPicker = () => {
    const { isLoading, isError, isEmpty, cards } = useTariffPicker()

    return (
        <StateProvider
            isLoading={isLoading}
            isError={isError}
            isEmpty={isEmpty}
            errorTitle="Не удалось загрузить тарифы"
            loadingComponent={<TariffPickerSkeleton />}
        >
            <section className="bg-white rounded-[20px] p-5">
                <SectionTitle
                    className="text-[22px] font-bold leading-[115%] text-secondary"
                    title="Тарифы"
                />

                {/* Карточки тарифов */}
                <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {cards.map((card) => (
                        <CompanyTariffCard key={card.id} card={card} />
                    ))}
                </div>
            </section>
        </StateProvider>
    )
}
