'use client';

import { useMemo } from "react"
import { useShallow } from "zustand/react/shallow"
import { socialLinksOrder, type SocialField } from "../config/socialLinksConfig"
import { useCompanySocialLinksStore } from "../store/useCompanySocialLinksStore"

export const useCompanySocialLinks = () => {
    const { fields, isPickerOpen, togglePicker, addField, setFields } = useCompanySocialLinksStore(
        useShallow((state) => ({
            fields: state.fields,
            isPickerOpen: state.isPickerOpen,
            togglePicker: state.togglePicker,
            addField: state.addField,
            setFields: state.setFields,
        }))
    )
    const availableFields = useMemo<SocialField[]>(() => {
        return socialLinksOrder.filter((key) => !fields[key])
    }, [fields])

    const allAdded = socialLinksOrder.every((key) => fields[key])

    return {
        fields,
        isPickerOpen,
        allAdded,
        availableFields,
        togglePicker,
        addField,
        setFields,
    }
}
