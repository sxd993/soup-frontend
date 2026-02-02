"use client"

import { Button, MockLogo } from "@/shared/ui"
import { StateProvider } from "@/app/providers/State/StateProvider"
import { useCompanyServices } from "../model/hooks/useCompanyServices"

export const CompanyServices = () => {
  const {
    request,
    categoryMenu,
    categoryServices,
    serviceModal,
  } = useCompanyServices()

  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-[32px] font-semibold text-secondary">Услуги</h1>
      </div>

      {categoryServices.selectedCategories.map((category) => (
        <div key={category.id} className="rounded-[30px] bg-white p-6 shadow-sm">
          <h2 className="text-[26px] font-semibold text-secondary">{category.title}</h2>

          <div className="mt-6 flex flex-col gap-4">
            <p className="text-[20px] font-semibold text-secondary">Услуги</p>

            <div className="flex flex-col divide-y divide-[#E5E0D6] border-t border-[#E5E0D6]">
              {category.services.map((service, index) => (
                <div key={`${service.name}-${index}`} className="flex items-center justify-between py-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-[14px] border border-[#DADADA] bg-[#F6F3EE]">
                      {service.imageUrl ? (
                        <img
                          src={service.imageUrl}
                          alt={service.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <MockLogo className="h-10 w-10" />
                      )}
                    </div>
                    <span className="text-[18px] text-secondary">{service.name}</span>
                  </div>
                  <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EDE8DE]"
                    onClick={() => categoryServices.removeServiceFromCategory(category.id, index)}
                    aria-label="Удалить услугу"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 7H19M9 7V5C9 4.44772 9.44772 4 10 4H14C14.5523 4 15 4.44772 15 5V7M8 7L9 20H15L16 7"
                        stroke="#2F2F2F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <Button
              className="mt-2 w-fit rounded-full !bg-[#535353] px-8 !text-white hover:!bg-[#2F2F2F] active:!bg-[#201F1F] disabled:!bg-[#C5C2C2]"
              onClick={() => categoryServices.openServiceModal(category.id)}
            >
              Добавить услугу
            </Button>
          </div>
        </div>
      ))}

      <div ref={categoryMenu.ref} className="relative">
        <Button
          className="flex h-16 w-full items-center justify-between rounded-[30px] !bg-[#535353] px-6 text-left text-[20px] font-semibold !text-white hover:!bg-[#2F2F2F] active:!bg-[#201F1F] disabled:!bg-[#C5C2C2]"
          onClick={categoryMenu.toggle}
          disabled={categoryMenu.availableCategories.length === 0}
        >
          <span>Добавить категорию</span>
          <span className="text-[28px] leading-none">+</span>
        </Button>

        {categoryMenu.isOpen ? (
          <div className="absolute left-0 top-full z-10 mt-2 w-full overflow-hidden rounded-[18px] border border-[#E5E5E5] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
            <StateProvider
              isLoading={request.isLoading}
              isError={request.isError}
              isEmpty={categoryMenu.availableCategories.length === 0}
              loadingMessage="Загружаем категории..."
              errorMessage="Не удалось загрузить категории"
              emptyMessage="Все категории уже добавлены"
            >
              <div className="flex flex-col">
                {categoryMenu.availableCategories.map((category) => (
                  <button
                    key={category.title}
                    type="button"
                    className="flex w-full items-center justify-between px-5 py-3 text-left text-sm font-medium text-secondary transition-colors hover:bg-[#F5F5F5]"
                    onClick={() => categoryMenu.addCategory(category)}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </StateProvider>
          </div>
        ) : null}
      </div>

      {serviceModal.isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-[760px] rounded-[30px] bg-white p-8">
            <h3 className="text-[30px] font-semibold text-secondary">Новая услуга</h3>

            <div className="mt-6 grid gap-4 md:grid-cols-[140px_1fr]">
              <label className="flex h-32 w-32 cursor-pointer items-center justify-center overflow-hidden rounded-[20px] border border-[#DADADA] bg-[#F6F6F6] text-center text-sm text-[#C5C2C2]">
                <input
                  type="file"
                  className="sr-only"
                  accept="image/png,image/jpeg,image/webp"
                  onChange={(event) => {
                    const file = event.target.files?.[0]
                    if (file) {
                      serviceModal.handleServiceImageUpload(file)
                      event.currentTarget.value = ""
                    }
                  }}
                  disabled={serviceModal.isImageUploading}
                />
                {serviceModal.serviceImageUrl ? (
                  <img
                    src={serviceModal.serviceImageUrl}
                    alt="Изображение услуги"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span>Загрузите фотографию</span>
                )}
              </label>
              <input
                type="text"
                placeholder="Название услуги"
                value={serviceModal.serviceName}
                onChange={(event) => serviceModal.setServiceName(event.target.value)}
                className="h-32 w-full rounded-[20px] border border-[#DADADA] px-5 text-base text-secondary outline-none placeholder:text-[#C5C2C2]"
              />
            </div>

            <div className="mt-5">
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-[18px] border border-[#DADADA] px-5 py-4 text-base text-secondary"
                onClick={serviceModal.toggleSelect}
              >
                <span>{serviceModal.selectedService ?? "Выберите категорию"}</span>
                <span className="text-lg">⌄</span>
              </button>
              {serviceModal.isSelectOpen ? (
                <div className="mt-2 max-h-48 overflow-auto rounded-[18px] border border-[#E5E5E5] bg-white">
                  {serviceModal.services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      className="flex w-full items-center px-5 py-3 text-left text-sm text-secondary hover:bg-[#F5F5F5]"
                      onClick={() => serviceModal.selectService(service)}
                    >
                      {service}
                    </button>
                  ))}
                  {serviceModal.services.length === 0 ? (
                    <div className="px-5 py-3 text-sm text-accent-quinary">
                      Нет доступных подкатегорий
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Button
                className="h-12 w-full rounded-full !bg-[#535353] !text-white hover:!bg-[#2F2F2F] active:!bg-[#201F1F] disabled:!bg-[#C5C2C2] sm:w-[240px]"
                onClick={serviceModal.close}
              >
                Отменить
              </Button>
              <Button
                className="h-12 w-full rounded-full !bg-[#8BC652] !text-accent-senary hover:!bg-[#7DAF4D] active:!bg-[#80D62C] disabled:!bg-[#D3EBBB] sm:w-[240px]"
                onClick={serviceModal.addService}
                disabled={serviceModal.isAddDisabled}
              >
                Добавить
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
