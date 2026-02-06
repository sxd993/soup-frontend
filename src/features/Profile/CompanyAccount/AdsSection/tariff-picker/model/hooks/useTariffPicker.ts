import { useQuery } from "@tanstack/react-query"
import { getCompanyTariffs } from "../../api/getCompanyTariffs"
import { useTariffSelection } from "./useTariffSelection"

export const useTariffPicker = () => {
    const query = useQuery({
        queryKey: ["company-tariffs"],
        queryFn: getCompanyTariffs,
        staleTime: 60 * 1000,
    })
    const selection = useTariffSelection(query.data?.tariffs)

    const isEmpty =
        !query.isLoading &&
        !query.isError &&
        !selection.isLoading &&
        !selection.isError &&
        selection.cards.length === 0

    return {
        isLoading: query.isLoading || selection.isLoading,
        isError: query.isError || selection.isError,
        isEmpty,
        cards: selection.cards,
    }
}
