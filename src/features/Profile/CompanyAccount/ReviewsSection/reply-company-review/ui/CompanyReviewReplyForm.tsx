"use client"

import { Button } from "@/shared/ui"
import { useEffect, useState } from "react"

type CompanyReviewReplyFormProps = {
  replyDraft: string
  isSubmitting: boolean
  onChange: (value: string) => void
  onSubmit: () => void
}

export const CompanyReviewReplyForm = ({
  replyDraft,
  isSubmitting,
  onChange,
  onSubmit,
}: CompanyReviewReplyFormProps) => {
  const [symbols, setSymbols] = useState(replyDraft.length)

  useEffect(() => {
    setSymbols(replyDraft.length)
  }, [replyDraft])

  const handleChange = (value: string) => {
    setSymbols(value.length)
    onChange(value)
  }

  return (
    <div className="flex flex-col gap-4 mt-7">
      <div className="relative">
        <textarea
          rows={4}
          value={replyDraft}
          onChange={(event) => handleChange(event.target.value)}
          placeholder="Ответ компании"
          className="w-full resize-none rounded-[10px] h-40 border border-[#c5c2c2] p-4 pb-8 leading-[140%] text-secondary text-base placeholder:text-[#c5c2c2] focus:outline-none"
        />
        <div className="pointer-events-none absolute bottom-4 right-4 font-normal leading-[130%] text-sm text-[#c5c2c2]">
          {symbols}/550
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          type="button"
          onClick={onSubmit}
          disabled={!replyDraft.trim() || isSubmitting}
          className="cursor-pointer"
        >
          {isSubmitting ? "Отправка..." : "Ответить"}
        </Button>
      </div>
    </div>
  )
}
