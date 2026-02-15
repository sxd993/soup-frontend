import { useEffect } from "react"
import { useForm } from "react-hook-form"
import type { ClientProfileResponse } from "@/entities/Profile/Client"
import type { ClientAccountFormValues } from "../types/ClientAccountFormValues.types"
import { mapClientToFormValues } from "../lib/mapClientToFormValues"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { showErrorToast, showSuccessToast } from "@/shared/ui"
import { getErrorMessage } from "@/shared/lib"
import { editClientProfile } from "../../api/editClientProfile"

const defaultValues: ClientAccountFormValues = {
    profile: {
        full_name: "",
        city: "",
        avatar_url: null,
    },
    contacts: [
        { type: "phone", value: "" },
        { type: "email", value: "" },
    ],
    notification_settings: {
        sms: false,
        email: false,
    },
    privacy_settings: {
        phone: false,
        email: false,
        social_links: false,
    },
}

export const useClientAccountForm = (client?: ClientProfileResponse, userId?: string) => {
    const form = useForm<ClientAccountFormValues>({
        defaultValues,
        mode: "onChange",
        reValidateMode: "onChange",
    })
    const queryClient = useQueryClient()

    useEffect(() => {
        if (!client) return
        form.reset(mapClientToFormValues(client))
    }, [client, form])

    const mutation = useMutation({
        mutationKey: ["editClientProfile"],
        mutationFn: editClientProfile,
        onSuccess: () => {
            showSuccessToast("Сохранено", "Данные клиента обновлены.")
            if (userId) {
                queryClient.invalidateQueries({ queryKey: ["client-profile", userId] })
            }
        },
        onError: (error) => {
            showErrorToast("Не удалось сохранить данные клиента", getErrorMessage(error, "Попробуйте ещё раз."))
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
