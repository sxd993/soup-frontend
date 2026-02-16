"use client";

import { useRef, useEffect } from "react";
import { useBlockOptions } from "../model/hooks/useBlockOptions";
import { useBlogFormContext } from "../model/context/BlogFormContext";
import { ImageUploadField } from "./ImageUploadField";
import type { ContentBlock } from "../model/types/create-blog.types";

function getTextBlockStyles(type: ContentBlock["type"]): string {
  switch (type) {
    case "subtitle2":
      return "text-[22px] font-bold leading-[115%] text-secondary";
    case "subtitle3":
      return "text-[18px] font-semibold leading-[120%] text-secondary";
    case "paragraph":
      return "text-[16px] font-semibold leading-[140%] text-secondary";
    default:
      return "text-[16px] text-secondary";
  }
}

export function AddedBlocksList() {
  const form = useBlogFormContext();
  const { blockOptions } = useBlockOptions();

  return (
    <div className="flex flex-col gap-3">
      {form.blocks.map((block, index) => {
        const label =
          blockOptions.find((o) => o.type === block.type)?.label ?? block.type;
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
                    form.updateBlock(
                      index,
                      (b) =>
                        (b as { type: string; text: string }) && {
                          ...b,
                          text: e.target.value,
                        },
                    )
                  }
                  placeholder={label}
                  className={`outline-none flex-1 min-w-[200px] placeholder:text-[#c5c2c2] ${getTextBlockStyles(block.type)}`}
                />
              )}
              {"url" in block && block.type === "image" && (
                <div className="flex-1 min-w-[200px]">
                  <ImageUploadField
                    value={block.url}
                    onChange={(url) =>
                      form.updateBlock(
                        index,
                        (b) =>
                          (b as { type: "image"; url: string }) && {
                            ...b,
                            url,
                          },
                      )
                    }
                    id={`block-image-${index}`}
                    label={label}
                    height="400px"
                  />
                </div>
              )}
              {"items" in block && block.type === "bulletList" && (
                <div className="flex-1 min-w-[200px]">
                  <ul className="space-y-2 text-[16px] font-semibold leading-[140%] text-secondary">
                    {block.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center gap-2 pl-6 relative"
                      >
                        <span className="absolute left-0 text-secondary">
                          •
                        </span>
                        <input
                          type="text"
                          value={item}
                          onChange={(e) =>
                            form.updateBlock(index, (b) => ({
                              ...b,
                              items: (
                                b as { type: "bulletList"; items: string[] }
                              ).items.map((it, i) =>
                                i === itemIndex ? e.target.value : it,
                              ),
                            }))
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              form.updateBlock(index, (b) => {
                                const newItems = [
                                  ...(
                                    b as { type: "bulletList"; items: string[] }
                                  ).items.slice(0, itemIndex + 1),
                                  "",
                                  ...(
                                    b as { type: "bulletList"; items: string[] }
                                  ).items.slice(itemIndex + 1),
                                ];
                                setTimeout(() => {
                                  const nextInput = document.querySelector(
                                    `input[data-block-index="${index}"][data-item-index="${itemIndex + 1}"]`,
                                  ) as HTMLInputElement;
                                  nextInput?.focus();
                                }, 0);
                                return { ...b, items: newItems };
                              });
                            } else if (
                              e.key === "Backspace" &&
                              item === "" &&
                              block.items.length > 1
                            ) {
                              e.preventDefault();
                              form.updateBlock(index, (b) => ({
                                ...b,
                                items: (
                                  b as { type: "bulletList"; items: string[] }
                                ).items.filter((_, i) => i !== itemIndex),
                              }));
                            }
                          }}
                          placeholder={`Элемент ${itemIndex + 1}`}
                          className="outline-none flex-1 placeholder:text-[#c5c2c2]"
                          data-block-index={index}
                          data-item-index={itemIndex}
                        />
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-end mt-2">
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
              {"items" in block && block.type === "numberedList" && (
                <div className="flex-1 min-w-[200px]">
                  <ol className="space-y-2 text-[16px] font-semibold leading-[140%] text-secondary">
                    {block.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center gap-2 pl-6 relative"
                      >
                        <span className="absolute left-0 text-secondary">
                          {itemIndex + 1}.
                        </span>
                        <input
                          type="text"
                          value={item}
                          onChange={(e) =>
                            form.updateBlock(index, (b) => ({
                              ...b,
                              items: (
                                b as { type: "numberedList"; items: string[] }
                              ).items.map((it, i) =>
                                i === itemIndex ? e.target.value : it,
                              ),
                            }))
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              form.updateBlock(index, (b) => {
                                const newItems = [
                                  ...(
                                    b as {
                                      type: "numberedList";
                                      items: string[];
                                    }
                                  ).items.slice(0, itemIndex + 1),
                                  "",
                                  ...(
                                    b as {
                                      type: "numberedList";
                                      items: string[];
                                    }
                                  ).items.slice(itemIndex + 1),
                                ];
                                setTimeout(() => {
                                  const nextInput = document.querySelector(
                                    `input[data-block-index="${index}"][data-item-index="${itemIndex + 1}"]`,
                                  ) as HTMLInputElement;
                                  nextInput?.focus();
                                }, 0);
                                return { ...b, items: newItems };
                              });
                            } else if (
                              e.key === "Backspace" &&
                              item === "" &&
                              block.items.length > 1
                            ) {
                              e.preventDefault();
                              form.updateBlock(index, (b) => ({
                                ...b,
                                items: (
                                  b as { type: "numberedList"; items: string[] }
                                ).items.filter((_, i) => i !== itemIndex),
                              }));
                            }
                          }}
                          placeholder={`Элемент ${itemIndex + 1}`}
                          className="outline-none flex-1 placeholder:text-[#c5c2c2]"
                          data-block-index={index}
                          data-item-index={itemIndex}
                        />
                      </li>
                    ))}
                  </ol>
                  <div className="flex justify-end mt-2">
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
                <hr className="flex-1 border-0 border-t border-black" />
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
        );
      })}
    </div>
  );
}
