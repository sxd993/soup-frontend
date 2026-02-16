"use client"

import { useBlockOptions } from "../model/hooks/useBlockOptions"
import { useBlogFormContext } from "../model/context/BlogFormContext"
import { ImageUploadField } from "./ImageUploadField"

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
            className="flex flex-col rounded-[10px] border border-[#c5c2c2] pl-3.75 pt-3.75 pb-4.25 pr-2.5"
          >
            <div className="flex flex-wrap items-center gap-2">
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
              {"url" in block && block.type === "image" && (
                <div className="flex-1 min-w-[200px]">
                  <ImageUploadField
                    value={block.url}
                    onChange={(url) =>
                      form.updateBlock(index, (b) => (b as { type: "image"; url: string }) && { ...b, url })
                    }
                    id={`block-image-${index}`}
                    label={label}
                    height="400px"
                  />
                </div>
              )}
              {"items" in block && (
                <div className="relative flex-1 min-w-[200px]">
                  <textarea
                    value={block.items.join("\n")}
                    onChange={(e) =>
                      form.updateBlock(index, (b) => ({
                        ...b,
                        items:
                          e.target.value === ""
                            ? [""]
                            : e.target.value.split("\n").map((s) => s.trim()),
                      }))
                    }
                    placeholder={label}
                    rows={Math.max(2, block.items.length)}
                    className="outline-none w-full min-w-[200px] placeholder:text-[#c5c2c2] resize-y pr-20 pb-10"
                  />
                  <div className="absolute bottom-6 right-2 z-10">
                    <button
                      type="button"
                      onClick={() => form.removeBlock(index)}
                      className="text-sm text-[#c5c2c2] hover:text-secondary"
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              )}
              {block.type === "divider" && (
                <span className="text-sm text-[#c5c2c2] flex-1">{label}</span>
              )}
            </div>
            {!("items" in block) && (
              <div className="flex justify-end mt-2">
                <button
                  type="button"
                  onClick={() => form.removeBlock(index)}
                  className="text-sm text-[#c5c2c2] hover:text-secondary"
                >
                  Удалить
                </button>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}