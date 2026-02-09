"use client"

import { useBlockOptions } from "../model/hooks/useBlockOptions"

type BlockTypeListProps = {
  onAddBlock: (type: "paragraph" | "subtitle2" | "subtitle3" | "image" | "divider" | "bulletList" | "numberedList") => void
}

export function BlockTypeList({ onAddBlock }: BlockTypeListProps) {
  const { blockOptions } = useBlockOptions()

  return (
    <div className="bg-white rounded-[20px] p-2 shrink-0 w-full lg:w-auto lg:min-w-[240px]">
      <div className="flex flex-col">
        {blockOptions.map(({ type, label }) => (
          <button
            key={type}
            type="button"
            onClick={() => onAddBlock(type)}
            className="w-full text-left px-4 py-3 rounded-[10px] text-base text-secondary transition-colors first:bg-[#f0f0f0] hover:bg-[#f5f5f5]"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}