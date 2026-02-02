"use client"

import Image from "next/image"
import { AdsBanner, ArrowDown, ArrowUp, Button, Heart, MockLogo } from "@/shared/ui"
import { StateProvider } from "@/app/providers/State/StateProvider"
import { useCompanyPublicPage } from "../model/hooks/useCompanyPublicPage"

export const CompanyPublicPage = () => {
  const {
    company,
    isLoading,
    isError,
    regions,
    canShowAllRegions,
    isRegionsExpanded,
    toggleRegions,
    services,
    openSectionIds,
    toggleSection,
    iconMap,
  } = useCompanyPublicPage()

  return (
    <section className="mt-8 pb-16">
      <StateProvider
        isLoading={isLoading}
        isError={isError}
        isEmpty={!company}
        loadingMessage="Загружаем компанию..."
        errorMessage="Не удалось загрузить компанию"
        emptyMessage="Компания не найдена"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px]">
          <div className="flex flex-col gap-6">
            <div className="rounded-[30px] bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-6">
                <div className="flex gap-4">
                  <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-[#F6F3EE] p-2">
                    {company?.logoUrl ? (
                      <Image
                        src={company.logoUrl}
                        alt={company.name}
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <MockLogo className="h-full w-full" />
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-[28px] font-semibold text-secondary">{company?.name ?? ""}</h1>
                    <p className="text-sm text-accent-quinary">
                      {regions[0] ?? "Регион не указан"}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E0D6] text-accent-quinary"
                  aria-label="Добавить в избранное"
                >
                  <Heart />
                </button>
              </div>

              <p className="mt-4 text-sm text-secondary leading-[150%]">{company?.description ?? ""}</p>

              <div className="mt-5">
                <p className="text-[18px] font-semibold text-secondary">Работаем в регионах:</p>
                <p className="mt-2 text-sm text-secondary">
                  {regions.length > 0 ? regions.join(", ") : "Регион не указан"}
                </p>
                {canShowAllRegions ? (
                  <button
                    type="button"
                    onClick={toggleRegions}
                    className="mt-2 text-sm text-accent-quinary"
                  >
                    {isRegionsExpanded ? "Скрыть" : "Показать все"}
                  </button>
                ) : null}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button className="flex h-12 w-full items-center justify-center rounded-full !bg-[#8BC652] !text-accent-senary hover:!bg-[#7DAF4D] active:!bg-[#80D62C] disabled:!bg-[#D3EBBB] sm:w-[180px]">
                  Позвонить
                </Button>
                <Button className="flex h-12 w-full items-center justify-center whitespace-nowrap rounded-full !bg-[#535353] !text-white hover:!bg-[#2F2F2F] active:!bg-[#201F1F] disabled:!bg-[#C5C2C2] sm:w-[260px]">
                  Предложить заказ
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-sm font-semibold text-secondary">
              <span className="text-primary">Услуги</span>
              <span className="text-accent-quinary">Отзывы</span>
              <span className="text-accent-quinary">Блог</span>
              <span className="text-accent-quinary">Контакты</span>
            </div>

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
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F6F3EE]">
                          {Icon ? <Icon isActive={isOpen} /> : null}
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
                          <p className="mt-3 text-sm text-accent-quinary">
                            Услуги пока не добавлены
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-[26px] bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-secondary">Похожие компании</h3>
              <div className="mt-4 flex flex-col gap-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-[12px] bg-[#E5E0D6]" />
                    <div>
                      <p className="text-sm font-semibold text-secondary">Название компании</p>
                      <p className="text-xs text-accent-quinary">Екатеринбург</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[26px] bg-white p-4 shadow-sm">
              <AdsBanner hasDescription={true} />
            </div>
          </aside>
        </div>
      </StateProvider>
    </section>
  )
}
