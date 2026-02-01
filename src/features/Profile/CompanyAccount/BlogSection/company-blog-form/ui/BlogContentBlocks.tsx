import Image from "next/image"
import { parseBlocks } from "../model/lib/parseBlocks"
import type { ContentBlock } from "../model/types/create-blog.types"

function BlogBlockView({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "subtitle2":
      return (
        <h3 className="mt-8 mb-3 text-[22px] font-bold leading-[115%] text-secondary">
          {block.text}
        </h3>
      )
    case "subtitle3":
      return (
        <h4 className="mt-6 mb-2 text-[18px] font-semibold leading-[120%] text-secondary">
          {block.text}
        </h4>
      )
    case "paragraph":
      return (
        <p className="my-4 text-[16px] font-semibold leading-[140%] text-secondary">
          {block.text}
        </p>
      )
    case "divider":
      return (
        <hr className="my-6 border-0 border-t border-black" />
      )
    case "bulletList":
      return (
        <ul className="my-4 list-disc pl-6 space-y-2 text-[16px] font-semibold leading-[140%] text-secondary">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )
    case "numberedList":
      return (
        <ol className="my-4 list-decimal pl-6 space-y-2 text-[16px] font-semibold leading-[140%] text-secondary">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      )
    case "image":
      return (
        <figure className="my-6 overflow-hidden rounded-[20px]">
          <Image
            src={block.url}
            alt=""
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </figure>
      )
    default:
      return null
  }
}

type BlogContentBlocksProps = {
  blocks: unknown[] | null
}

export function BlogContentBlocks({ blocks }: BlogContentBlocksProps) {
  const items = parseBlocks(blocks)
  if (!items.length) return null

  return (
    <div className="mt-6 pt-6 [&>*:first-child]:mt-0">
      {items.map((block, i) => (
        <BlogBlockView key={i} block={block} />
      ))}
    </div>
  )
}