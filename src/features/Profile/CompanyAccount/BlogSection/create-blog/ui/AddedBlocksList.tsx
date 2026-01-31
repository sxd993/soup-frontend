"use client"

import { useBlockOptions } from "../model/hooks/useBlockOptions"
import { useBlogFormContext } from "../model/context/BlogFormContext"

export function AddedBlocksList() {
  const form = useBlogFormContext()
  const { blockOptions } = useBlockOptions()

  return (
    <div className="flex flex-col gap-3">
      {form.blocks.map((block, index) => {
        const label = blockOptions.find((o) => o.type === block.type)?.label ?? block.type
        return (
          <div
            key={index}
            className="flex flex-wrap items-center gap-2 rounded-[10px] border border-[#c5c2c2] pl-3.75 pt-3.75 pb-4.25 pr-2.5"
          >
            {"text" in block && (
              <input
                type="text"
                value={block.text}
                onChange={(e) =>
                  form.updateBlock(index, (b) => (b as { type: string; text: string }) && { ...b, text: e.target.value })
                }
                placeholder={label}
                className="outline-none flex-1 min-w-[200px] placeholder:text-[#c5c2c2]"
              />
            )}
            {"url" in block && (
              <input
                type="url"
                value={block.url}
                onChange={(e) =>
                  form.updateBlock(index, (b) => (b as { type: "image"; url: string }) && { ...b, url: e.target.value })
                }
                placeholder={label}
                className="outline-none flex-1 min-w-[200px] placeholder:text-[#c5c2c2]"
              />
            )}
            {"items" in block && (
              <input
                type="text"
                value={block.items.join(", ")}
                onChange={(e) =>
                  form.updateBlock(index, (b) => ({
                    ...b,
                    items:
                      e.target.value === ""
                        ? [""]
                        : e.target.value.split(",").map((s) => s.trim()),
                  }))
                }
                placeholder={label}
                className="outline-none flex-1 min-w-[200px] placeholder:text-[#c5c2c2]"
              />
            )}
            {block.type === "divider" && (
              <span className="text-sm text-[#c5c2c2] flex-1">{label}</span>
            )}
            <button
              type="button"
              onClick={() => form.removeBlock(index)}
              className="ml-auto shrink-0 text-sm text-[#c5c2c2] hover:text-secondary"
            >
              Удалить
            </button>
          </div>
        )
      })}
    </div>
  )
}