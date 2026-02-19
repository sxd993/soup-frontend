import { ArrowDown, ArrowUp, MockLogo } from "@/shared/ui";
import type { CompanyServiceCategory } from "@/entities/Profile/Company/model/types/company-services.types";

type CompanyServicesSectionProps = {
  services: CompanyServiceCategory[];
  openSectionIds: Set<string>;
  toggleSection: (id: string) => void;
};

export const CompanyServicesSection = ({
  services,
  openSectionIds,
  toggleSection,
}: CompanyServicesSectionProps) => {
  return (
    <div className="flex flex-col gap-4">
      {services.map((section) => {
        const isOpen = openSectionIds.has(section.category);
        return (
          <div key={section.category} className="rounded-[26px] bg-white p-5">
            <button
              type="button"
              onClick={() => toggleSection(section.category)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                  {section.category[0]}
                </span>
                <span className="text-[20px] font-semibold text-secondary">
                  {section.category}
                </span>
              </span>
              <span className="shrink-0">
                {isOpen ? <ArrowUp /> : <ArrowDown />}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
              style={{
                maxHeight: isOpen
                  ? section.services.length > 0
                    ? "520px"
                    : "80px"
                  : "0px",
              }}
            >
              <div className="mt-4">
                {section.description?.trim() ? (
                  <p className="mb-4 text-sm leading-[150%] text-secondary">
                    {section.description}
                  </p>
                ) : null}
                {section.services.length > 0 ? (
                  <div className="mt-4 flex flex-col gap-4">
                    {section.services.map((item, index) => (
                      <div
                        key={`${item.name}-${index}`}
                        className="flex flex-col gap-2"
                      >
                        <span className="text-sm font-semibold text-secondary">
                          {item.name}
                        </span>
                        <div className="h-32 w-32 shrink-0 overflow-hidden rounded-[18px] border border-[#E5E0D6] bg-white">
                          {item.imageUrl ? (
                            <img
                              src={item.imageUrl}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-[#F6F3EE]">
                              <MockLogo className="h-10 w-10" />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-3 text-sm text-accent-quinary">
                    Услуги пока не добавлены
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
