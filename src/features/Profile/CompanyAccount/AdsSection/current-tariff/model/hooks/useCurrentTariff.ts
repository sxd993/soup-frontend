import { useMemo } from "react"
import { useQuery } from "@tanstack/react-query"
import { getCurrentTariff } from "../../api/getCurrentTariff"
import { resolveTariffTitle } from "@/shared/lib"
import { formatRemainingDays } from "../lib/formatRemainingDays"
import type {
    CurrentTariffResponse,
    CurrentTariffView,
} from "../types/current-tariff.types"

export const useCurrentTariff = () => {
    const query = useQuery<CurrentTariffResponse>({
        queryKey: ["company-current-tariff"],
        queryFn: getCurrentTariff,
        staleTime: 60 * 1000,
    })

    const view = useMemo<CurrentTariffView | null>(() => {
        const current = query.data?.currentTariff
        if (!current) return null

        const normalizedName = resolveTariffTitle(current.name)
        const title = resolveTariffTitle(normalizedName)
        const remainingLabel = formatRemainingDays(query.data?.daysLeft ?? null)
        const showRenewButton = current.name !== "basic"

        return {
            title,
            remainingLabel,
            showRenewButton,
        }
    }, [query.data])

    const isEmpty = !query.isLoading && !query.isError && !view

    return {
        isLoading: query.isLoading,
        isError: query.isError,
        isEmpty,
        view,
    }
}
