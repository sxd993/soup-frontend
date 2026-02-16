"use client"

import { Heart, HeartActive } from "@/shared/ui"
import { useBlogLikeController } from "../model/hooks/useBlogLikeController"

type BlogLikeButtonProps = {
  blogId: string
  className?: string
}

export const BlogLikeButton = ({ 
  blogId, 
  className = "" 
}: BlogLikeButtonProps) => {
  const { liked, likeCount, onToggle, disabled } = useBlogLikeController(blogId)

  const displayCount = Number.isNaN(likeCount) || likeCount < 0 ? 0 : likeCount

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation()
        e.preventDefault()
        onToggle()
      }}
      disabled={disabled}
      className={`relative z-10 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {liked ? (
        <HeartActive className="w-[24px] h-[24px]" />
      ) : (
        <Heart className="w-[24px] h-[24px]" />
      )}
      <span 
        className="text-lg font-semibold leading-[120%] tracking-normal text-secondary"
        style={{ fontFamily: 'Manrope, var(--font-family-sans)' }}
      >
        {displayCount}
      </span>
    </button>
  )
}
