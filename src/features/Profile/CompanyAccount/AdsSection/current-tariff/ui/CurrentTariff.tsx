'use client';

import { StateProvider } from "@/app/providers/State/StateProvider"
import { Button, SectionTitle } from "@/shared/ui"
import { useCurrentTariff } from "../model/hooks/useCurrentTariff"
import { CurrentTariffSkeleton } from "./CurrentTariffSkeleton"

export const CurrentTariff = () => {
    const { isLoading, isError, isEmpty, view } = useCurrentTariff()

    return (
        <StateProvider
            isLoading={isLoading}
            isError={isError}
            isEmpty={isEmpty}
            errorTitle="Не удалось загрузить выбранный тариф"
            loadingComponent={<CurrentTariffSkeleton />}
        >
            {view && (
                <section className="bg-white rounded-[30px] p-5">
                    <SectionTitle
                        className="text-[22px] font-bold leading-[115%] text-secondary"
                        title="Выбранный тариф"
                    />

                    {/* Текущий тариф чела */}
                    <div
                        className="mt-6 rounded-[20px] border border-[#6c6c6c] bg-white p-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
                    >
                        <div className="flex flex-col gap-2 items-start">
                            {/* Название тарифа */}
                            <p className="text-[18px] font-semibold text-secondary leading-[120%]">
                                {view.title}
                            </p>
                            {/* Скок до конца */}
                            <p className="text-[14px] text-[#6c6c6c] leading-[130%] font-normal">
                                {view.remainingLabel}
                            </p>
                        </div>
                        {view.showRenewButton && (
                            <Button className="px-10!">Продлить</Button>
                        )}
                    </div>
                </section>
            )}
        </StateProvider>
    )
}
