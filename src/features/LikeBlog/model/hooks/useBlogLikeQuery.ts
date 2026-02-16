"use client"

import { useQuery } from "@tanstack/react-query"
import { useSession } from "@/entities/Session"
import { checkBlogLike } from "../api/checkBlogLike"

type BlogLikeData = {
  liked: boolean
  likeCount: number
}

export function useBlogLikeQuery(blogId: string, initialData?: BlogLikeData) {
  const { data: session } = useSession()
  const isAuthorized = Boolean(session?.user)

  return useQuery<BlogLikeData>({
    queryKey: ["blog-like", blogId],
    queryFn: () => checkBlogLike(blogId),
    enabled: isAuthorized,
    initialData,
    staleTime: 0,
  })
}
