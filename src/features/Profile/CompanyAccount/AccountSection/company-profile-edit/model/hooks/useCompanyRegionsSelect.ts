import { useEffect, useState } from "react"
import { useFormContext } from "react-hook-form"
import type { CompanyAccountFormValues } from "@/widgets/Profile/CompanyProfile/AccountCompanyForm/model/types/CompanyAccountFormValues.types"
import { useRegions } from "./useRegions"

export const useCompanyRegionsSelect = () => {
    const {
        query,
        selected,
        setQuery,
        removeRegion,
        filteredRegions,
        handleSelect,
        setSelected,
        regions,
    } = useRegions()
    const { setValue, watch } = useFormContext<CompanyAccountFormValues>()
    const [formRegions, setFormRegions] = useState<string[]>([])

    useEffect(() => {
        const current = watch("profile.regions")
        setFormRegions(Array.isArray(current) ? current : [])
        const subscription = watch((value, { name }) => {
            if (name && !name.startsWith("profile.regions")) return
            const next = value?.profile?.regions
            setFormRegions(Array.isArray(next) ? next : [])
        })
        return () => subscription.unsubscribe()
    }, [watch])

    useEffect(() => {
        const selectedLabels = selected.map((region) => region.label)
        if (formRegions.length > 0 && selectedLabels.length === 0) return
        const isSameSize = formRegions.length === selectedLabels.length
        const isSame = isSameSize && formRegions.every((label) => selectedLabels.includes(label))
        if (isSame) return
        setValue("profile.regions", selectedLabels)
    }, [formRegions, selected, setValue])

    useEffect(() => {
        if (!regions.length || formRegions.length === 0) return
        const selectedLabels = new Set(selected.map((region) => region.label))
        const missingLabels = formRegions.filter((label) => !selectedLabels.has(label))
        if (missingLabels.length === 0) return
        const mapped = regions.filter((region) => missingLabels.includes(region.label))
        if (mapped.length > 0) {
            setSelected([...selected, ...mapped])
        }
    }, [formRegions, regions, selected, setSelected])

    return {
        query,
        selected,
        setQuery,
        removeRegion,
        filteredRegions,
        handleSelect,
    }
}
