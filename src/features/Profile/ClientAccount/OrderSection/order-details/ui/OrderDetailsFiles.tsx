"use client";

import type { OrderDetailsFileItem } from "../model/hooks/useOrderDetailsFiles";
import { useOrderDetailsFiles } from "../model/hooks/useOrderDetailsFiles";

const OrderDetailsFilesEmpty = () => (
  <p className="mt-3 text-[16px] font-medium leading-[140%] text-accent-secondary">
    Нет файлов
  </p>
);

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

const OrderDetailsFileItem = ({ item }: { item: OrderDetailsFileItem }) =>
  item.type === "image" ? (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block aspect-square w-full overflow-hidden rounded-xl border border-[#E5E5E5] bg-accent-septenary/10"
    >
      <img src={item.url} alt="" className="h-full w-full object-cover" />
    </a>
  ) : (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl border border-[#E5E5E5] bg-[#e5e7eb]"
    >
      <FileIconSvg />
    </a>
  );

const OrderDetailsFilesList = ({
  items,
}: {
  items: OrderDetailsFileItem[];
}) => (
  <div className="mt-5 grid grid-cols-4 gap-3">
    {items.map((item) => (
      <OrderDetailsFileItem key={item.key} item={item} />
    ))}
  </div>
);

type OrderDetailsFilesProps = {
  fileUrls: string[];
};

export const OrderDetailsFiles = ({ fileUrls }: OrderDetailsFilesProps) => {
  const { items, isEmpty } = useOrderDetailsFiles(fileUrls);
  return isEmpty ? (
    <OrderDetailsFilesEmpty />
  ) : (
    <OrderDetailsFilesList items={items} />
  );
};
