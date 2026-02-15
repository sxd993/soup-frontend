"use client";

import { OrderPlusCircleIcon } from "@/shared/ui";
import { useCreateOrderFormFiles } from "../model/hooks/useCreateOrderFormFiles";
import type { OrderFileItem } from "../model/types/types";

const FileIconSvg = () => (
  <svg
    fill="#6b7280"
    className="h-14 w-14 shrink-0"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path d="M19,24H1V4h4V0h12.4L23,5.6V20h-4V24z M3,22h14v-2H5V6H3V22z M7,18h14V8h-6V2H7V18z M17,6h3.6L17,2.4V6z M17,16H9v-2h8V16z M19,12H9v-2h10V12z M13,8H9V6h4V8z" />
  </svg>
);

function CreateOrderFormFileCard({
  item,
  index,
  onRemove,
}: {
  item: OrderFileItem;
  index: number;
  onRemove: () => void;
}) {
  const isImage = /\.(jpe?g|png|gif|webp)(\?|$)/i.test(item.url) || /image\//i.test(item.url);

  const content = isImage ? (
    <img src={item.url} alt="" className="h-full w-full object-cover" />
  ) : (
    <div className="flex h-full w-full items-center justify-center">
      <FileIconSvg />
    </div>
  );

  return (
    <div
      className={`group relative aspect-square w-full overflow-hidden rounded-xl border border-[#E5E5E5] ${isImage ? "bg-accent-septenary/10" : "bg-[#e5e7eb]"}`}
    >
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full w-full"
      >
        {content}
      </a>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          onRemove();
        }}
        className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100"
        aria-label="Удалить"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M1 1l10 10M11 1L1 11" />
        </svg>
      </button>
    </div>
  );
}

export const CreateOrderFormFilesInput = () => {
  const { handleFilesInputChange, isUploading } = useCreateOrderFormFiles();

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
  );
};

export const CreateOrderFormFilesList = () => {
  const { list, removeFile } = useCreateOrderFormFiles();

  if (list.length === 0) return null;

  return (
    <div className="mt-5 grid grid-cols-4 gap-3">
      {list.map((item, index) => (
        <CreateOrderFormFileCard
          key={`${item.url}-${index}`}
          item={item}
          index={index}
          onRemove={() => removeFile(index)}
        />
      ))}
    </div>
  );
};
