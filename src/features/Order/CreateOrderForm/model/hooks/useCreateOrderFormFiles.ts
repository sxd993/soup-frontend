"use client"

import type { ChangeEvent } from "react"
import { useMutation } from "@tanstack/react-query"
import { useFormContext, useWatch } from "react-hook-form"
import { showErrorToast } from "@/shared/ui"
import { getErrorMessage } from "@/shared/lib"
import { uploadOrderFile } from "@/entities/Orders"
import type { CreateOrderFormValues, OrderFileItem } from "../types/types"

const ALLOWED_IMAGE_TYPES = ["image/png", "image/jpeg", "image/webp"]
const ALLOWED_FILE_TYPES = ["application/pdf"]
const ALLOWED_MIME = [...ALLOWED_IMAGE_TYPES, ...ALLOWED_FILE_TYPES]
const MAX_SIZE = 10 * 1024 * 1024 // 10 MB

export const useCreateOrderFormFiles = () => {
  const { control, setValue, getValues } = useFormContext<CreateOrderFormValues>()
  const fileUrls = useWatch({ control, name: "fileUrls", defaultValue: [] })

  const uploadMutation = useMutation({
    mutationKey: ["upload-order-file"],
    mutationFn: uploadOrderFile,
    onError: (error) => {
      showErrorToast(
        "Не удалось загрузить файл",
        getErrorMessage(error, "Попробуйте ещё раз."),
      )
    },
  })

  const addFiles = async (files: File[]) => {
    for (const file of files) {
      if (!ALLOWED_MIME.includes(file.type)) continue
      if (file.size > MAX_SIZE) continue
      try {
        const { url } = await uploadMutation.mutateAsync(file)
        const current = getValues("fileUrls")
        setValue("fileUrls", [...current, { url, name: file.name }], {
          shouldDirty: true,
        })
      } catch {
        // error already shown by mutation
      }
    }
  }

  const handleFilesInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const added = e.target.files ? Array.from(e.target.files) : []
    addFiles(added)
    e.target.value = ""
  }

  const removeFile = (index: number) => {
    const next = (fileUrls as OrderFileItem[]).filter((_, i) => i !== index)
    setValue("fileUrls", next, { shouldDirty: true })
  }

  const list = (fileUrls as OrderFileItem[]) ?? []
  const photoEntries = list
    .map((item, i) => ({ item, i }))
    .filter(({ item }) => isImageUrl(item.url))
  const fileEntries = list
    .map((item, i) => ({ item, i }))
    .filter(({ item }) => !isImageUrl(item.url))

  return {
    control,
    handleFilesInputChange,
    photoEntries,
    fileEntries,
    removeFile,
    isUploading: uploadMutation.isPending,
  }
}

function isImageUrl(url: string): boolean {
  const lower = url.toLowerCase()
  return (
    lower.includes(".png") ||
    lower.includes(".jpg") ||
    lower.includes(".jpeg") ||
    lower.includes(".webp") ||
    lower.includes("image")
  )
}
