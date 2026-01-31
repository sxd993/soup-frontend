import { CreateBlogForm } from "@/features/Profile/CompanyAccount/BlogSection"
import { SectionTitle } from "@/shared/ui"

export default function NewBlogPage() {
  return (
    <section className="flex flex-col gap-6 min-h-screen">
      <SectionTitle
        className="font-semibold text-[28px]! leading-[110%]!"
        title="Новая публикация"
      />
      <CreateBlogForm />
    </section>
  )
}