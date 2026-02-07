import { useMemo } from "react"
import { useQuery } from "@tanstack/react-query"
import { getCurrentTariff } from "../../../current-tariff/api/getCurrentTariff"
import type { CompanyTariff } from "../types/tariffs.types"
import { buildTariffFeatureItems, formatTariffPrice } from "../lib/tariffPicker.utils"
import { normalizeTariffName, resolveTariffTitle } from "@/shared/lib"
import type { CurrentTariffResponse } from "../../../current-tariff/model/types/current-tariff.types"
import type { CompanyTariffCardProps } from '@/entities/Profile/Company/model/types/company-tariff-card.types'

const TARIFF_ORDER = ["start", "business", "premium", "vip", "basic"]


export const useTariffSelection = (tariffs?: CompanyTariff[]) => {
    const currentTariffQuery = useQuery<CurrentTariffResponse>({
        queryKey: ["company-current-tariff"],
        queryFn: getCurrentTariff,
        staleTime: 60 * 1000,
    })

    const cards = useMemo<CompanyTariffCardProps[]>(() => {
        if (!tariffs?.length) return []

        const currentName = normalizeTariffName(
            currentTariffQuery.data?.currentTariff?.name
        )

        const sorted = [...tariffs].sort(
            (a, b) => TARIFF_ORDER.indexOf(a.name) - TARIFF_ORDER.indexOf(b.name)
        )

        return sorted.map((tariff) => {
            const normalizedName = normalizeTariffName(tariff.name)
            const isSelected = normalizedName === currentName
            return {
                id: tariff.id,
                title: resolveTariffTitle(normalizedName),
                priceLabel: formatTariffPrice(tariff.price),
                featureItems: buildTariffFeatureItems(tariff.features),
                isSelected,
                actionLabel: isSelected ? "Выбрано" : "Выбрать",
            }
        })
    }, [tariffs, currentTariffQuery.data])

    return {
        isLoading: currentTariffQuery.isLoading,
        isError: currentTariffQuery.isError,
        cards,
    }
}
