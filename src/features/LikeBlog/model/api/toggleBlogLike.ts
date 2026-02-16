import { AxiosClient } from "@/shared/api"

export async function toggleBlogLike(blogId: string): Promise<{ liked: boolean; likeCount: number }> {
  const response = await AxiosClient.post(`/blogs/${blogId}/likes/toggle`)
  return response.data
}
