export type CompanyBlogStatus = "all" | "published" | "drafts"

export interface CompanyBlogItem {
  id: string
  type: "published" | "draft"
  title: string
  description: string
  imageUrl: string
  contentBlocks: unknown[] | null
  createdAt: string
  isPinned: boolean
  companyName: string
  companyLogoUrl: string | null
}