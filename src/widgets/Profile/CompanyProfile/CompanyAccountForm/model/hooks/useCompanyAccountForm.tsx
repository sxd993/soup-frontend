import { useEffect } from "react"
import { useForm } from "react-hook-form"
import type { CompanyAccountFormValues } from "../types/CompanyAccountFormValues.types"
import type { CompanyProfileResponse } from "@/entities/Profile/Company/model/types/company.types"
import { mapCompanyToFormValues } from "../lib/mapCompanyToFormValues"
import { useMutation } from "@tanstack/react-query"
import { editCompanyProfile } from "../../api/editCompanyProfile"

const defaultValues: CompanyAccountFormValues = {
    profile: {
        logo: null,
        name: "",
        description: "",
        regions: [],
        address: "",
    },
    contacts: {
        phones: [],
        email: "",
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

export const useCompanyAccountForm = (company?: CompanyProfileResponse) => {
    const form = useForm<CompanyAccountFormValues>({ defaultValues })


    // useEffect для сброса базовых значений формы, если прилетела компания с сервера
    useEffect(() => {
        if (!company) return
        form.reset(mapCompanyToFormValues(company))
    }, [company, form])


    //  Функция для отправки формы на сервер
    const mutation = useMutation({
        mutationKey: ['editCompanyProfile'],
        mutationFn: editCompanyProfile,
        onSuccess: () => {
            console.log('Company profile updated successfully')
        }
    })

    const handleSubmit = form.handleSubmit((data) => {
        mutation.mutate(data)
    })

    return {
        form,
        handleSubmit
    }
}
