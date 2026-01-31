import { SectionTitle } from "@/shared/ui"
import { EditBlogForm } from "@/features/Profile/CompanyAccount/BlogSection"

type EditBlogPageProps = {
  params: Promise<{ id: string }>
}

export default async function EditBlogPage({ params }: EditBlogPageProps) {
  const { id } = await params

  return (
    <section className="flex flex-col gap-6 min-h-screen">
      <SectionTitle
        className="font-semibold text-[28px]! leading-[110%]!"
        title="Редактирование блога"
      />
      <EditBlogForm blogId={id} />
    </section>
  )
}