"use client"

import { useEffect, useRef, useState } from "react"
import type { ChangeEvent } from "react"
import { useMutation } from "@tanstack/react-query"
import { uploadBlogImage } from "../api/uploadBlogImage"

const ALLOWED_MIME_TYPES = ["image/png", "image/jpeg", "image/webp"]
const MAX_SIZE_BYTES = 5 * 1024 * 1024 // 5 MB

export function useImageUpload(onSuccess: (url: string) => void) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [localPreview, setLocalPreview] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const mutation = useMutation({
    mutationKey: ["upload-blog-image"],
    mutationFn: uploadBlogImage,
    onSuccess: (data) => {
      onSuccess(data.url)
      setLocalPreview(null)
      setErrorMessage(null)
    },
    onError: () => {
      setErrorMessage("Не удалось загрузить фото")
    },
  })

  useEffect(() => {
    return () => {
      if (localPreview) URL.revokeObjectURL(localPreview)
    }
  }, [localPreview])

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setErrorMessage(null)

    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      setErrorMessage("Недопустимый формат. Разрешены: PNG, JPEG, WebP")
      return
    }
    if (file.size > MAX_SIZE_BYTES) {
      setErrorMessage("Размер файла превышает 5 МБ")
      return
    }

    if (localPreview) URL.revokeObjectURL(localPreview)
    setLocalPreview(URL.createObjectURL(file))
    mutation.mutate(file)

    if (inputRef.current) inputRef.current.value = ""
  }

  return {
    inputRef,
    localPreview,
    isUploading: mutation.isPending,
    errorMessage,
    handleFileChange,
  }
}