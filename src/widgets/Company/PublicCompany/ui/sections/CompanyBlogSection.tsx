type CompanyBlogSectionProps = {
  title?: string
}

export const CompanyBlogSection = ({ title = "Блог" }: CompanyBlogSectionProps) => {
  return (
    <div className="rounded-[26px] bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-secondary">{title}</h3>
      <p className="mt-3 text-sm text-accent-quinary">Здесь будут записи блога</p>
    </div>
  )
}
