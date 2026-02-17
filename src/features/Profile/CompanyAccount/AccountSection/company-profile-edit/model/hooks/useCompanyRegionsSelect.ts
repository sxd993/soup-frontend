import { useEffect, useMemo, useRef, useState } from "react"
import { useFormContext, useWatch } from "react-hook-form"
import type { CompanyAccountFormValues } from "@/widgets/Profile/CompanyProfile/AccountCompanyForm/model/types/CompanyAccountFormValues.types"
import { useRegions } from "./useRegions"

const normalizeRegions = (value: unknown): string[] => {
    if (!Array.isArray(value)) return []
    return value.filter((region): region is string => typeof region === "string")
}

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
    const { control, setValue, formState } = useFormContext<CompanyAccountFormValues>()
    const [isOpen, setIsOpen] = useState(false)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const rawFormRegions = useWatch({ control, name: "profile.regions" })
    const formRegions = useMemo(() => normalizeRegions(rawFormRegions), [rawFormRegions])

    useEffect(() => {
        setQuery("")
    }, [setQuery])

    useEffect(() => {
        if (!formState.submitCount) return
        setIsOpen(false)
        setQuery("")
    }, [formState.submitCount, setQuery])

    useEffect(() => {
        if (!regions.length) return
        const mapped = regions.filter((region) => formRegions.includes(region.label))
        const selectedLabels = selected.map((region) => region.label)
        const isSameSize = mapped.length === selectedLabels.length
        const isSame = isSameSize && mapped.every((region) => selectedLabels.includes(region.label))
        if (isSame) return
        setSelected(mapped)
    }, [formRegions, regions, selected, setSelected])

    const openDropdown = () => {
        setIsOpen(true)
    }

    useEffect(() => {
        if (!isOpen) return
        inputRef.current?.focus()
    }, [isOpen])

    useEffect(() => {
        if (!isOpen) return
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [isOpen])

    const handleSelectRegion = (region: Parameters<typeof handleSelect>[0]) => {
        const alreadySelected = selected.some((item) => item.id === region.id)
        const nextSelected = alreadySelected ? selected : [...selected, region]
        setValue(
            "profile.regions",
            nextSelected.map((item) => item.label),
            { shouldDirty: true }
        )
        handleSelect(region)
        setIsOpen(false)
    }

    const handleRemoveRegion = (id: number) => {
        const nextSelected = selected.filter((region) => region.id !== id)
        setValue(
            "profile.regions",
            nextSelected.map((item) => item.label),
            { shouldDirty: true }
        )
        removeRegion(id)
    }

    const isDropdownVisible = isOpen && filteredRegions.length > 0

    return {
        query,
        setQuery,
        inputRef,
        containerRef,
        isOpen,
        selected,
        removeRegion: handleRemoveRegion,
        dropdownRegions: filteredRegions,
        isDropdownVisible,
        openDropdown,
        handleSelectRegion,
    }
}
