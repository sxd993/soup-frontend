import { useEffect, useMemo, useRef, useState } from "react"
import type { ChangeEvent } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useFormContext, useWatch } from "react-hook-form"
import { uploadCompanyLogo } from "../api/uploadCompanyLogo"
import type { CompanyAccountFormValues } from "@/widgets/Profile/CompanyProfile/AccountCompanyForm/model/types/CompanyAccountFormValues.types"

const ALLOWED_MIME_TYPES = ["image/png", "image/jpeg", "image/webp", "image/svg+xml"]
const MAX_SIZE_BYTES = 2 * 1024 * 1024

export const useCompanyLogoUpload = () => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [localPreview, setLocalPreview] = useState<string | null>(null)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

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
            setLocalPreview(null)
            queryClient.invalidateQueries({ queryKey: ["company-profile"], exact: false })
        },
        onError: () => {
            setErrorMessage("Не удалось загрузить логотип")
        },
    })

    const previewUrl = useMemo(() => {
        if (localPreview) return localPreview
        return typeof logoUrl === "string" ? logoUrl : null
    }, [localPreview, logoUrl])

    useEffect(() => {
        return () => {
            if (localPreview) {
                URL.revokeObjectURL(localPreview)
            }
        }
    }, [localPreview])

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (!file) return

        setErrorMessage(null)

        if (!ALLOWED_MIME_TYPES.includes(file.type)) {
            setErrorMessage("Недопустимый формат логотипа")
            return
        }

        if (file.size > MAX_SIZE_BYTES) {
            setErrorMessage("Размер файла превышает 2 МБ")
            return
        }

        if (localPreview) {
            URL.revokeObjectURL(localPreview)
        }
        setLocalPreview(URL.createObjectURL(file))
        mutation.mutate(file)

        if (inputRef.current) {
            inputRef.current.value = ""
        }
    }

    return {
        inputRef,
        previewUrl,
        isUploading: mutation.isPending,
        isError: Boolean(errorMessage),
        errorMessage,
        handleFileChange,
    }
}
