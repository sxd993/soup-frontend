import { ArrowDown, ArrowUp, MockLogo } from "@/shared/ui"
import type { CompanyServiceCategory } from "@/entities/Profile/Company/model/types/company-services.types"

type CompanyServicesSectionProps = {
  services: CompanyServiceCategory[]
  openSectionIds: Set<string>
  toggleSection: (id: string) => void
  iconMap: Record<string, React.ComponentType<{ isActive?: boolean }>>
}

export const CompanyServicesSection = ({
  services,
  openSectionIds,
  toggleSection,
  iconMap,
}: CompanyServicesSectionProps) => {
  return (
    <div className="flex flex-col gap-4">
      {services.map((section) => {
        const isOpen = openSectionIds.has(section.category)
        const Icon = iconMap[section.category]
        return (
          <div key={section.category} className="rounded-[26px] bg-white p-5 shadow-sm">
            <button
              type="button"
              onClick={() => toggleSection(section.category)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                  {Icon ? <Icon isActive={isOpen} /> : null}
                </span>
                <span className="text-[20px] font-semibold text-secondary">
                  {section.category}
                </span>
              </span>
              <span className="shrink-0">{isOpen ? <ArrowUp /> : <ArrowDown />}</span>
            </button>

            <div
              className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
              style={{
                maxHeight: isOpen ? (section.services.length > 0 ? "520px" : "80px") : "0px",
              }}
            >
              <div className="mt-4">
                {section.services.length > 0 ? (
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {section.services.map((item, index) => (
                      <div key={`${item.name}-${index}`} className="flex flex-col gap-2">
                        <div className="overflow-hidden rounded-[18px] border border-[#E5E0D6] bg-white">
                          {item.imageUrl ? (
                            <img
                              src={item.imageUrl}
                              alt={item.name}
                              className="h-[120px] w-full object-cover"
                            />
                          ) : (
                            <div className="flex h-[120px] w-full items-center justify-center bg-[#F6F3EE]">
                              <MockLogo className="h-10 w-10" />
                            </div>
                          )}
                        </div>
                        <span className="text-sm text-secondary">{item.name}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-3 text-sm text-accent-quinary">Услуги пока не добавлены</p>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
