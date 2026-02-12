"use client"

import { AddPhotoIcon } from "@/shared/ui/Controls/icons/Forms"
import { StateProvider } from "@/app/providers/State/StateProvider"
import { useImageUpload } from "../model/hooks/useImageUpload"

type ImageUploadFieldProps = {
  value: string
  onChange: (url: string) => void
  id?: string
  label?: string
  minHeight?: string
}

export function ImageUploadField({
  value,
  onChange,
  id = "image-upload",
  label = "Добавить фото",
  minHeight = "200px",
}: ImageUploadFieldProps) {
  const {
    inputRef,
    localPreview,
    isUploading,
    errorMessage,
    handleFileChange,
  } = useImageUpload(onChange)

  const displayUrl = localPreview ?? (value || null)

  const content = (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        style={{ minHeight }}
        className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-[10px] border border-[#c5c2c2] transition-colors"
      >
        <input
          id={id}
          ref={inputRef}
          type="file"
          accept="image/png,image/jpeg,image/webp"
          className="sr-only"
          onChange={handleFileChange}
          disabled={isUploading}
        />
        {displayUrl ? (
          <img
            src={displayUrl}
            alt=""
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="flex flex-col items-center justify-center gap-2 text-center text-base text-[#BFBFBF]">
            <AddPhotoIcon className="shrink-0" />
            <span>{label}</span>
          </span>
        )}
      </label>
      {errorMessage && (
        <p className="text-xs text-red-500">{errorMessage}</p>
      )}
    </div>
  )

  return (
    <StateProvider
      isLoading={isUploading}
      isError={Boolean(errorMessage)}
      errorTitle={errorMessage ?? "Не удалось загрузить фото"}
      loadingComponent={content}
    >
      {content}
    </StateProvider>
  )
}