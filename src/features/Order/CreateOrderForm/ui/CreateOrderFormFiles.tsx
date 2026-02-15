"use client"

import { OrderPlusCircleIcon } from "@/shared/ui"
import { useCreateOrderFormFiles } from "../model/hooks/useCreateOrderFormFiles"

export const CreateOrderFormFilesInput = () => {
  const { handleFilesInputChange, isUploading } = useCreateOrderFormFiles()

  return (
    <label className="flex w-full cursor-pointer items-center gap-2 rounded-[20px] text-base bg-background p-2 text-accent-septenary font-medium outline-none transition">
      <OrderPlusCircleIcon className="shrink-0 text-accent-septenary" />
      <span className="min-w-0 flex-1 text-accent-quinary">
        {isUploading ? "Загрузка…" : "Фото/файлы"}
      </span>
      <input
        type="file"
        multiple
        accept="image/png,image/jpeg,image/webp,application/pdf"
        className="sr-only"
        disabled={isUploading}
        onChange={handleFilesInputChange}
      />
    </label>
  )
}

export const CreateOrderFormFilesList = () => {
  const { photoEntries, fileEntries, removeFile } = useCreateOrderFormFiles()

  if (photoEntries.length === 0 && fileEntries.length === 0) return null

  return (
    <div className="flex flex-col gap-4 pt-2">
      {photoEntries.length > 0 ? (
        <div>
          <p className="mb-2 text-sm font-medium text-accent-secondary">
            Прикрепленные фото
          </p>
          <div className="flex flex-wrap gap-3">
            {photoEntries.map(({ item, i }) => (
              <div
                key={`${item.url}-${i}`}
                className="group relative rounded-[12px] bg-background p-2"
              >
                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100"
                  aria-label="Удалить"
                >
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M1 1l10 10M11 1L1 11" />
                  </svg>
                </button>
                <img
                  src={item.url}
                  alt=""
                  className="h-16 w-16 rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {fileEntries.length > 0 ? (
        <div>
          <p className="mb-2 text-sm font-medium text-accent-secondary">
            Прикрепленные файлы
          </p>
          <div className="flex flex-wrap gap-3">
            {fileEntries.map(({ item, i }) => (
              <div
                key={`${item.url}-${i}`}
                className="group relative rounded-[12px] bg-background px-3 py-2 pr-8"
              >
                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  className="absolute right-1.5 top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100"
                  aria-label="Удалить"
                >
                  <svg
                    width="6"
                    height="6"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M1 1l10 10M11 1L1 11" />
                  </svg>
                </button>
                <span className="text-sm text-accent-secondary">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
