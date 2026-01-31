"use client"

import Link from "next/link"
import { StateProvider } from "@/app/providers/State/StateProvider"
import { Button } from "@/shared/ui"
import { useBlogForm } from "../model/hooks/useBlogForm"
import type { BlogFormMode } from "../model/hooks/useBlogForm"
import { BlogFormProvider } from "../model/context/BlogFormContext"
import { useBlockOptions } from "../model/hooks/useBlockOptions"
import { AddedBlocksList } from "./AddedBlocksList"

type BlogFormBodyProps = {
  mode: BlogFormMode
  blogId?: string
}

export function BlogFormBody({ mode, blogId }: BlogFormBodyProps) {
  const { companyLoading, blogNotFound, form, leftButtonLabel, isSubmitDisabled } =
    useBlogForm(mode, blogId)
  const { blockOptions } = useBlockOptions()

  if (blogNotFound) {
    return (
      <div className="bg-white p-5 rounded-[20px] flex flex-col gap-4">
        <p className="text-secondary">Блог не найден или недоступен для редактирования.</p>
        <Link
          href="/profile/company/blog"
          className="text-base font-semibold text-primary hover:underline"
        >
          ← К списку блогов
        </Link>
      </div>
    )
  }

  return (
    <StateProvider
      isLoading={companyLoading}
      isError={false}
      loadingMessage="Загружаем..."
    >
      <BlogFormProvider value={form}>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-white p-5 flex flex-col gap-3 rounded-[20px] w-full"
        >
          <div className="flex items-center gap-2">
            {form.company?.logo_url && (
              <img
                src={form.company.logo_url}
                alt=""
                className="h-10 w-10 rounded-[10px] object-cover"
              />
            )}
            <span className="text-base font-semibold text-secondary">
              {form.company?.name ?? "Компания"}
            </span>
          </div>

          <div className="rounded-[10px] border border-[#c5c2c2] pl-3.75 pt-3.75 pb-4.25 pr-2.5 min-h-[200px] flex flex-col justify-center">
            <input
              type="url"
              placeholder="Добавить главное фото (ссылка)"
              value={form.imageUrl}
              onChange={(e) => form.setImageUrl(e.target.value)}
              className="outline-none w-full text-base placeholder:text-[#c5c2c2]"
            />
          </div>

          <div className="h-13.5 flex w-full rounded-[10px] border border-[#c5c2c2] pl-3.75 pt-3.75 pb-4.25 pr-2.5">
            <input
              type="text"
              placeholder="Заголовок"
              value={form.title}
              onChange={(e) => form.setTitle(e.target.value)}
              className="outline-none flex-1 placeholder:text-[#c5c2c2]"
            />
          </div>

          <div className="flex flex-col rounded-[10px] border border-[#c5c2c2] p-4 gap-2 min-h-40">
            <textarea
              placeholder="Расскажите о новостях, целях, опыте..."
              value={form.description}
              onChange={(e) => form.setDescription(e.target.value)}
              rows={5}
              className="outline-none flex-1 resize-none placeholder:text-[#c5c2c2]"
            />
          </div>

          <AddedBlocksList />

          <div className="flex flex-wrap gap-2">
            {blockOptions.map(({ type, label }) => (
              <button
                key={type}
                type="button"
                onClick={() => form.addBlock(type)}
                className="rounded-[20px] px-4 py-2 text-sm font-medium bg-[#f0f0f0] text-secondary hover:bg-[#e5e5e5] transition-colors"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-2 lg:flex-row lg:flex-wrap lg:justify-between">
            <Button
              type="button"
              onClick={form.handleSubmit(false)}
              disabled={isSubmitDisabled}
              className="w-full lg:w-auto bg-[#2f2f2f]! text-white! hover:bg-[#1a1a1a]!"
            >
              {leftButtonLabel}
            </Button>
            <Button
              type="button"
              onClick={form.handleSubmit(true)}
              disabled={isSubmitDisabled}
              className="w-full lg:w-auto"
            >
              Опубликовать
            </Button>
          </div>

          {form.isError && (
            <p className="text-sm text-red-600">Не удалось сохранить. Попробуйте ещё раз.</p>
          )}
        </form>
      </BlogFormProvider>
    </StateProvider>
  )
}
