"use client"

import { useState } from "react"

type CompanyReviewReplyTextProps = {
  replyText: string
  replyDateLabel?: string | null
}

export const CompanyReviewReplyText = ({
  replyText,
  replyDateLabel,
}: CompanyReviewReplyTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const limit = 550
  const isOverflow = replyText.length > limit

  return (
    <div className="rounded-[20px] bg-[#F6F6F6] px-5 py-5 w-full max-w-[600px] flex flex-col mt-5">
      <p className="text-[22px] font-bold leading-[115%] text-secondary">Ответ компании</p>
      <div
        className={`mt-3 w-full text-[16px] font-medium leading-[140%] text-secondary whitespace-pre-wrap break-words ${
          isExpanded ? "" : "max-h-[90px] overflow-hidden"
        }`}
      >
        {replyText}
      </div>
      {isOverflow && (
        <button
          type="button"
          className="mt-2 self-start text-[14px] font-semibold text-primary"
          onClick={() => setIsExpanded((value) => !value)}
        >
          {isExpanded ? "Скрыть" : "Показать полностью"}
        </button>
      )}

    </div>
  )
}
