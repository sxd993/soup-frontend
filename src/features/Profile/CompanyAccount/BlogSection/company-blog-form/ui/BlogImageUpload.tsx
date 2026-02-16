"use client"

import { useBlogFormContext } from "../model/context/BlogFormContext"
import { ImageUploadField } from "./ImageUploadField"

export function BlogImageUpload() {
  const { imageUrl, setImageUrl } = useBlogFormContext()

  return (
    <ImageUploadField
      value={imageUrl}
      onChange={setImageUrl}
      id="blog-main-image-upload"
      label="Загрузите главное фото"
      height="400px"
    />
  )
}
