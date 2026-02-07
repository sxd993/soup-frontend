"use client"

import { useSearchParams } from "next/navigation"
import { SectionTitle } from "@/shared/ui"
import { EditBlogForm } from "@/features/Profile/CompanyAccount/BlogSection"

export default function EditBlogClient() {
  const searchParams = useSearchParams()
  const blogId = searchParams?.get("id") || ""

  return (
    <section className="flex flex-col gap-6 min-h-screen">
      <SectionTitle
        className="font-semibold text-[28px]! leading-[110%]!"
        title="Редактирование блога"
      />
      <EditBlogForm blogId={blogId} />
    </section>
  )
}
