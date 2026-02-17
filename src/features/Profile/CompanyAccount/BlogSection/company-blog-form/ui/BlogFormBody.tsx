"use client";

import { StateProvider } from "@/app/providers/State/StateProvider";
import { Button } from "@/shared/ui";
import { useBlogForm } from "../model/hooks/useBlogForm";
import type { BlogFormMode } from "../model/hooks/useBlogForm";
import { BlogFormProvider } from "../model/context/BlogFormContext";
import { useBlockOptions } from "../model/hooks/useBlockOptions";
import { AddedBlocksList } from "./AddedBlocksList";
import { BlogImageUpload } from "./BlogImageUpload";
import { BlogFormBodySkeleton } from "./BlogFormBodySkeleton";

type BlogFormBodyProps = {
  mode: BlogFormMode;
  blogId?: string;
};

export function BlogFormBody({ mode, blogId }: BlogFormBodyProps) {
  const {
    companyLoading,
    blogNotFound,
    form,
    leftButtonLabel,
    isSubmitDisabled,
  } = useBlogForm(mode, blogId);
  const { blockOptions } = useBlockOptions();

  return (
    <StateProvider
      isLoading={companyLoading}
      isError={false}
      isEmpty={blogNotFound}
      loadingComponent={<BlogFormBodySkeleton />}
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

          <BlogImageUpload />

          <div className="h-auto min-h-13.5 flex w-full rounded-[10px] border border-[#c5c2c2] pl-3.75 pt-3.75 pb-4.25 pr-2.5">
            <textarea
              placeholder="Заголовок"
              value={form.title}
              onChange={(e) => form.setTitle(e.target.value)}
              rows={1}
              className="outline-none flex-1 w-full min-w-0 placeholder:text-[#c5c2c2] text-[22px] font-bold text-secondary leading-[105%] break-words resize-none overflow-hidden"
              style={{ minHeight: "1.5rem" }}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = "auto";
                target.style.height = `${target.scrollHeight}px`;
              }}
            />
          </div>

          <div className="flex flex-col rounded-[10px] border border-[#c5c2c2] p-4 gap-2 min-h-40">
            <textarea
              placeholder="Расскажите о новостях, целях, опыте..."
              value={form.description}
              onChange={(e) => form.setDescription(e.target.value)}
              rows={5}
              className="outline-none flex-1 w-full min-w-0 resize-none placeholder:text-[#c5c2c2] text-[16px] font-semibold leading-[140%] text-secondary break-words"
            />
          </div>

          <AddedBlocksList />

          <div className="flex flex-wrap gap-2">
            {blockOptions.map(({ type, label }) => (
              <button
                key={type}
                type="button"
                onClick={() => form.addBlock(type)}
                className="rounded-[20px] px-3 py-1.5 text-xs font-medium bg-[#f0f0f0] text-secondary hover:bg-[#e5e5e5] transition-colors lg:px-4 lg:py-2 lg:text-sm"
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
              className="w-full lg:w-auto text-sm! px-6! py-2! lg:text-base! lg:px-15! bg-[#2f2f2f]! text-white! hover:bg-[#1a1a1a]!"
            >
              {leftButtonLabel}
            </Button>
            <Button
              type="button"
              onClick={form.handleSubmit(true)}
              disabled={isSubmitDisabled}
              className="w-full lg:w-auto text-sm! px-6! py-2! lg:text-base! lg:px-15!"
            >
              Отправить на модерацию
            </Button>
          </div>
        </form>
      </BlogFormProvider>
    </StateProvider>
  );
}
