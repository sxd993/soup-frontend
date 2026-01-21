import { useForm } from "react-hook-form"
import type { CompanyAccountFormValues } from "../types/CompanyAccountForm.types"

const defaultValues: CompanyAccountFormValues = {
    profile: {
        logo: null,
        name: "",
        description: "",
        regions: [],
    },
    contacts: {
        phones: [],
        email: "",
        representativeName: "",
    },
    socials: {
        website: "",
        vk: "",
        youtube: "",
        whatsapp: "",
        telegram: "",
        yandexDzen: "",
    },
}

export const useCompanyAccountForm = () => {
    const form = useForm<CompanyAccountFormValues>({ defaultValues })

    return {
        form
    }
}
