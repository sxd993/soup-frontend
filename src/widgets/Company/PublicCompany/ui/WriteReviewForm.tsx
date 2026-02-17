"use client"

import { useState, useRef, useCallback } from "react"
import Image from "next/image"
import { MainIcon, Button, AddPhotoIcon, StarIcon } from "@/shared/ui"
import { useClientProfile } from "@/entities/Profile/Client"
import { useCreateCompanyReview } from "@/features/CompanyReview"
import { showErrorToast, showSuccessToast } from "@/shared/ui/State"

const EMPTY_STAR = "#EEEBE6"
const FILLED_STAR = "#8BC652"

const MAX_PHOTOS = 5
const MAX_COMMENT_LENGTH = 200
const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/webp"]
const MAX_SIZE = 5 * 1024 * 1024

type WriteReviewFormProps = {
  companyId: string
  /** id пользователя-клиента для загрузки ФИО и аватара (форма показывается только клиенту) */
  clientUserId: string
  onSuccess?: () => void
}

export function WriteReviewForm({ companyId, clientUserId, onSuccess }: WriteReviewFormProps) {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")
  const [files, setFiles] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const { data: clientProfile } = useClientProfile(clientUserId)
  const { submitReview, isPending } = useCreateCompanyReview(companyId)

  const fullName = clientProfile?.full_name?.trim() || "Пользователь"
  const avatarUrl = clientProfile?.avatar_url?.trim() || null

  const addFiles = useCallback((newFiles: FileList | null) => {
    if (!newFiles?.length) return
    const list: File[] = []
    const previewList: string[] = []
    const currentCount = files.length
    for (let i = 0; i < newFiles.length && currentCount + list.length < MAX_PHOTOS; i++) {
      const file = newFiles[i]
      if (!ALLOWED_TYPES.includes(file.type)) {
        showErrorToast("Недопустимый формат", "Разрешены: PNG, JPEG, WebP")
        continue
      }
      if (file.size > MAX_SIZE) {
        showErrorToast("Слишком большой файл", "Максимум 5 МБ")
        continue
      }
      list.push(file)
      previewList.push(URL.createObjectURL(file))
    }
    if (list.length) {
      setFiles((prev) => prev.slice(0, MAX_PHOTOS - list.length).concat(list))
      setPreviews((prev) => {
        prev.forEach(URL.revokeObjectURL)
        return prev.slice(0, MAX_PHOTOS - list.length).concat(previewList)
      })
    }
    if (fileInputRef.current) fileInputRef.current.value = ""
  }, [files.length])

  const removeFile = useCallback((index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
    setPreviews((prev) => {
      URL.revokeObjectURL(prev[index])
      return prev.filter((_, i) => i !== index)
    })
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (rating < 1) {
      showErrorToast("Укажите оценку", "Выберите от 1 до 5 звёзд")
      return
    }
    try {
      await submitReview({ rating, comment: comment.trim(), files })
      showSuccessToast("Отзыв сохранён", "Спасибо за ваш отзыв.")
      setRating(0)
      setComment("")
      setFiles([])
      setPreviews((p) => {
        p.forEach(URL.revokeObjectURL)
        return []
      })
      onSuccess?.()
    } catch {
      showErrorToast("Не удалось сохранить отзыв", "Попробуйте позже.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="min-w-0 max-w-full overflow-hidden rounded-[26px] bg-white p-5 md:p-6">
      <div className="flex min-w-0 flex-col gap-4">
        {/* Верхняя строка: аватар + ФИО слева, звёзды справа */}
        <div className="flex flex-row items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white">
              {avatarUrl ? (
                <Image src={avatarUrl} alt="" fill className="object-cover" sizes="48px" />
              ) : (
                <MainIcon className="h-full w-full p-1" />
              )}
            </div>
            <div>
              <p className="text-base font-bold text-secondary">{fullName}</p>
              <p className="text-xs text-accent-quinary">Оценка и отзыв будут видны всем</p>
            </div>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setRating(value)}
                className="p-0.5 transition-opacity hover:opacity-80"
                aria-label={`Оценка ${value}`}
              >
                <StarIcon color={rating >= value ? FILLED_STAR : EMPTY_STAR} width={26} height={26} className="shrink-0" />
              </button>
            ))}
          </div>
        </div>

        {/* Поле отзыва */}
        <div className="relative min-w-0 overflow-hidden">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value.slice(0, MAX_COMMENT_LENGTH))}
            placeholder="Напишите отзыв как можно подробнее. Так вы поможете другим пользователям сделать выбор."
            rows={5}
            maxLength={MAX_COMMENT_LENGTH}
            className="box-border w-full min-w-0 max-w-full resize-y overflow-x-hidden wrap-break-word rounded-xl border border-[#C5C2C2] bg-white px-4 py-3 pb-8 text-sm text-secondary placeholder:text-[#BFBFBF] outline-none focus:border-primary"
          />
          <div className="pointer-events-none absolute bottom-3 right-4 text-sm font-normal leading-[130%] text-[#c5c2c2]">
            {comment.length}/{MAX_COMMENT_LENGTH}
          </div>
        </div>

        {/* Загрузка фото */}
        <div>
          <p className="mb-2 text-sm font-medium text-secondary">Загрузите до 5 фото</p>
          <div className="flex flex-wrap items-center gap-3">
            {previews.map((url, idx) => (
              <div key={idx} className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-white">
                <img src={url} alt="" className="h-full w-full object-cover" />
                <button
                  type="button"
                  onClick={() => removeFile(idx)}
                  className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
                  aria-label="Удалить фото"
                >
                  <span className="text-sm leading-none">×</span>
                </button>
              </div>
            ))}
            {files.length < MAX_PHOTOS && (
              <>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  className="sr-only"
                  onChange={(e) => addFiles(e.target.files)}
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border border-[#C5C2C2] bg-background text-[#BFBFBF] transition hover:border-primary hover:text-primary"
                >
                  <AddPhotoIcon className="h-8 w-8" />
                </button>
              </>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit" disabled={isPending || rating < 1}>
            Сохранить
          </Button>
        </div>
      </div>
    </form>
  )
}
