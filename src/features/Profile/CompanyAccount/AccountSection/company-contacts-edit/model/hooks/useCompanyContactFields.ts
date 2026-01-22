'use client';

import { useMemo } from "react"
import { useShallow } from "zustand/react/shallow"
import { useCompanyContactFieldsStore, type ContactField } from "../store/useCompanyContactFieldsStore"

export const useCompanyContactFields = () => {

    const { counts, isPickerOpen, togglePicker, addField, setCounts } = useCompanyContactFieldsStore(
        useShallow((state) => ({
            counts: state.counts,
            isPickerOpen: state.isPickerOpen,
            togglePicker: state.togglePicker,
            addField: state.addField,
            setCounts: state.setCounts,
        }))
    )

    // Скок доступных полей осталось
    const availableFields = useMemo<ContactField[]>(() => {
        const result: ContactField[] = []

        if (counts.phone < 2) {
            result.push("phone")
        }

        if (counts.email < 2) {
            result.push("email")
        }

        return result
    }, [counts.email, counts.phone])


    // Состояние если закончилось место
    const allAdded = counts.phone >= 2 && counts.email >= 2

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
