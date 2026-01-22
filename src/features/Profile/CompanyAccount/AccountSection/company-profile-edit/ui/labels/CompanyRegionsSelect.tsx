'use client';

import { useEffect } from "react"
import { useFormContext } from "react-hook-form"
import type { CompanyAccountFormValues } from "@/widgets/Profile/CompanyProfile/CompanyAccountForm/model/types/CompanyAccountFormValues.types"
import { useRegions } from "../../model/hooks/regions/useRegions"

export const CompanyRegionsSelect = () => {
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
    const formRegions = watch("profile.regions")

    useEffect(() => {
        setValue("profile.regions", selected.map((region) => region.label))
    }, [selected, setValue])

    useEffect(() => {
        if (!regions.length || !formRegions?.length) return
        const selectedLabels = new Set(selected.map((region) => region.label))
        const missingLabels = formRegions.filter((label) => !selectedLabels.has(label))
        if (missingLabels.length === 0) return
        const mapped = regions.filter((region) => missingLabels.includes(region.label))
        if (mapped.length > 0) {
            setSelected([...selected, ...mapped])
        }
    }, [formRegions, regions, selected, setSelected])

    return (
        <div className="flex flex-col gap-3">
            <div className="rounded-[10px] border border-[#c5c2c2] pl-3.75 pt-3.75 pb-4.25 pr-2.5">
                <input
                    type="text"
                    placeholder="Введите регион"
                    className="outline-none w-full text-base placeholder:text-[#c5c2c2]"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />

                {filteredRegions.length > 0 && (
                    <div className="mt-5 flex flex-col gap-2 max-h-40 overflow-auto">
                        {filteredRegions.map((region) => (
                            <button
                                key={region.id}
                                type="button"
                                className="text-left text-sm text-secondary hover:text-primary"
                                onClick={() => handleSelect(region)}
                            >
                                {region.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            {selected.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {selected.map((region) => (
                        <button
                            key={region.id}
                            type="button"
                            className="group inline-flex items-center gap-2 w-fit px-4 py-1 text-[11px] font-medium bg-[#f1f3ec] hover:bg-[#f1f3ec] transition-all duration-300 text-secondary rounded-full"
                            onClick={() => removeRegion(region.id)}
                        >
                            {region.label}
                            <span className="text-[10px]">
                                x
                            </span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
