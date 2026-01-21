import { useMemo } from "react"
import { useQuery } from "@tanstack/react-query"
import { useShallow } from "zustand/react/shallow"
import { useCompanyRegionsStore } from "../../store/useCompanyRegionsStore"
import type { RegionItemType } from "../../types/RegionItemType"
import { fetchRegions } from "../../../api/fetchRegions"

export const useRegions = () => {
    
    const { data: regions = [] } = useQuery<RegionItemType[]>({
        queryKey: ["regions"],
        queryFn: fetchRegions,
        staleTime: 10 * 60 * 1000,
    })

    const { query, selected, setQuery, addRegion, removeRegion } = useCompanyRegionsStore(
        useShallow((state) => ({
            query: state.query,
            selected: state.selected,
            setQuery: state.setQuery,
            addRegion: state.addRegion,
            removeRegion: state.removeRegion,
        }))
    )

    const filteredRegions = useMemo(() => {
        const lowered = query.trim().toLowerCase()
        return regions.filter((region) => {
            const isSelected = selected.some((item) => item.id === region.id)
            const matches = lowered
                ? region.label.toLowerCase().includes(lowered)
                : true
            return !isSelected && matches
        })
    }, [query, regions, selected])

    const handleSelect = (region: RegionItemType) => {
        addRegion(region)
        setQuery("")
    }
    return {
        query,
        selected,
        setQuery,
        removeRegion,
        filteredRegions,
        handleSelect,
    }
}
