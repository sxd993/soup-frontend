type CompanyTab = "services" | "reviews" | "blog" | "contacts"

type CompanyTabsProps = {
  activeTab: CompanyTab
  onChange: (tab: CompanyTab) => void
}

export const CompanyTabs = ({ activeTab, onChange }: CompanyTabsProps) => {
  return (
    <div className="flex flex-wrap gap-6 text-sm font-semibold text-secondary">
      <button
        type="button"
        onClick={() => onChange("services")}
        className={`${activeTab === "services" ? "text-primary" : "text-accent-quinary hover:text-secondary"} transition-colors`}
      >
        Услуги
      </button>
      <button
        type="button"
        onClick={() => onChange("reviews")}
        className={`${activeTab === "reviews" ? "text-primary" : "text-accent-quinary hover:text-secondary"} transition-colors`}
      >
        Отзывы
      </button>
      <button
        type="button"
        onClick={() => onChange("blog")}
        className={`${activeTab === "blog" ? "text-primary" : "text-accent-quinary hover:text-secondary"} transition-colors`}
      >
        Блог
      </button>
      <button
        type="button"
        onClick={() => onChange("contacts")}
        className={`${activeTab === "contacts" ? "text-primary" : "text-accent-quinary hover:text-secondary"} transition-colors`}
      >
        Контакты
      </button>
    </div>
  )
}
