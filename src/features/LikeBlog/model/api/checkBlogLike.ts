import { AxiosClient } from "@/shared/api"

export async function checkBlogLike(blogId: string): Promise<{ liked: boolean; likeCount: number }> {
  const response = await AxiosClient.get(`/blogs/${blogId}/likes/me`)
  return response.data
}
