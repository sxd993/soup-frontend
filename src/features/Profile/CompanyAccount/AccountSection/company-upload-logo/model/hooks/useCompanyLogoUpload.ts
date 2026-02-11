import { useRef } from "react"
import type { ChangeEvent } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useFormContext, useWatch } from "react-hook-form"
import { getErrorMessage } from "@/shared/lib/error-handler"
import { showErrorToast, showSuccessToast } from "@/shared/ui"
import { uploadCompanyLogo } from "../api/uploadCompanyLogo"
import type { CompanyAccountFormValues } from "@/widgets/Profile/CompanyProfile/AccountCompanyForm/model/types/CompanyAccountFormValues.types"

const DEFAULT_ERROR = "Не удалось загрузить логотип. Попробуйте другой файл или позже."

export const useCompanyLogoUpload = () => {
    const inputRef = useRef<HTMLInputElement | null>(null)

    const { control, setValue } = useFormContext<CompanyAccountFormValues>()
    const logoUrl = useWatch({ control, name: "profile.logo" })
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationKey: ["upload-company-logo"],
        mutationFn: uploadCompanyLogo,
        onSuccess: (company) => {
            const nextLogo = company.logo_url ?? ""
            if (nextLogo) {
                setValue("profile.logo", nextLogo, { shouldDirty: true })
            }
            queryClient.invalidateQueries({ queryKey: ["company-profile"], exact: false })
            showSuccessToast("Изображение изменено", "Логотип компании обновлён.")
        },
        onError: (error: Error) => {
            showErrorToast("Ошибка загрузки логотипа", getErrorMessage(error, DEFAULT_ERROR))
        },
    })

    const previewUrl = typeof logoUrl === "string" ? logoUrl : null

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (!file) return
        mutation.mutate(file)
        if (inputRef.current) {
            inputRef.current.value = ""
        }
    }

    return {
        inputRef,
        previewUrl,
        isUploading: mutation.isPending,
        handleFileChange,
    }
}
