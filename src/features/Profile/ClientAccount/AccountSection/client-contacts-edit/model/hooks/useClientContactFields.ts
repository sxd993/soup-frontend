'use client';

import { useMemo } from "react"
import { useShallow } from "zustand/react/shallow"
import { CONTACT_FIELD_LIMITS, useClientContactFieldsStore, type ContactField } from "../store/useClientContactFieldsStore"

export const useClientContactFields = () => {
    const { counts, isPickerOpen, togglePicker, addField, setCounts } = useClientContactFieldsStore(
        useShallow((state) => ({
            counts: state.counts,
            isPickerOpen: state.isPickerOpen,
            togglePicker: state.togglePicker,
            addField: state.addField,
            setCounts: state.setCounts,
        }))
    )

    const availableFields = useMemo<ContactField[]>(() => {
        return (Object.keys(counts) as ContactField[]).filter((field) => counts[field] < CONTACT_FIELD_LIMITS[field])
    }, [counts])

    const allAdded = availableFields.length === 0

    return {
        counts,
        isPickerOpen,
        allAdded,
        availableFields,
        togglePicker,
        addField,
        setCounts,
    }
}
