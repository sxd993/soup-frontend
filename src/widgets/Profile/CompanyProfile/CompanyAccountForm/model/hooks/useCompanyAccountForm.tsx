import { useEffect } from "react"
import { useForm } from "react-hook-form"
import type { CompanyAccountFormValues } from "../types/CompanyAccountFormValues.types"
import type { CompanyProfileResponse } from "@/entities/Profile/Company/model/types/company.types"
import { mapCompanyToFormValues } from "../lib/mapCompanyToFormValues"
import { useMutation, useQueryClient } from "@tanstack/react-query"
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
        emails: [],
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

export const useCompanyAccountForm = (company?: CompanyProfileResponse, userId?: string) => {
    const form = useForm<CompanyAccountFormValues>({ defaultValues })
    const queryClient = useQueryClient()


    // useEffect для сброса базовых значений формы, если прилетела компания с сервера
    useEffect(() => {
        if (!company) return
        form.reset(mapCompanyToFormValues(company), { keepDirtyValues: true })
    }, [company, form])


    //  Функция для отправки формы на сервер
    const mutation = useMutation({
        mutationKey: ['editCompanyProfile'],
        mutationFn: editCompanyProfile,
        onSuccess: () => {
            console.log('Company profile updated successfully')
            if (userId) {
                queryClient.invalidateQueries({ queryKey: ["company-profile", userId] })
            }
        },
        onError: (error) => {
            console.error('Failed to update company profile', error)
        },
    })

    const handleSubmit = form.handleSubmit((data) => {
        mutation.mutate(data)
    })

    return {
        form,
        handleSubmit,
        isPending: mutation.isPending,
    }
}
