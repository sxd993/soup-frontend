"use client";

import {
  Button,
  BlackButton,
  MockLogo,
  SectionTitle,
  DeleteIcon,
  ChevronUpIcon,
  PlusIcon,
} from "@/shared/ui";
import { StateProvider } from "@/app/providers/State/StateProvider";
import { useCompanyServices } from "../model/hooks/useCompanyServices";
import { CompanyServicesSkeleton } from "./CompanyServicesSkeleton";

export const CompanyServices = () => {
  const { request, categoryMenu, categoryServices, serviceModal } =
    useCompanyServices();

  const isLoading = request.isLoading;
  const isError = request.isError;

  return (
    <StateProvider
      isLoading={isLoading}
      isError={isError}
      isEmpty={false}
      loadingComponent={<CompanyServicesSkeleton />}
      errorTitle="Не удалось загрузить услуги"
    >
      <section className="flex flex-col gap-4 md:gap-6">
        {categoryServices.selectedCategories.map((category) => {
          const isCollapsed = categoryServices.collapsedCategories.has(
            category.id,
          );
          return (
            <div
              key={category.id}
              className="rounded-[20px] bg-white px-4 py-3 md:px-6 md:py-4"
            >
              <div className="flex items-center justify-between gap-2">
                <SectionTitle
                  className="text-[20px] md:text-[28px] font-semibold leading-[110%] text-secondary"
                  title={category.title}
                />
                <button
                  type="button"
                  onClick={() =>
                    categoryServices.toggleCategoryCollapse(category.id)
                  }
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-[#F5F5F5] md:h-15 md:w-15"
                  aria-label={
                    isCollapsed ? "Развернуть категорию" : "Свернуть категорию"
                  }
                >
                  <ChevronUpIcon
                    className={`transition-transform duration-200 ${
                      isCollapsed ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {!isCollapsed && (
                <div className="mt-4 flex flex-col gap-3 md:mt-6 md:gap-4">
                  <textarea
                    placeholder="Описание"
                    value={category.description || ""}
                    onChange={(e) =>
                      categoryServices.updateCategoryDescription(
                        category.id,
                        e.target.value,
                      )
                    }
                    maxLength={500}
                    className="h-[100px] w-full rounded-[10px] border border-[#C5C2C2] px-4 py-3 text-sm text-secondary outline-none placeholder:text-[#C5C2C2] resize-none md:px-5 md:py-4 md:text-base"
                  />
                  <p className="text-[18px] font-bold leading-[115%] text-secondary md:text-[22px]">
                    Услуги
                  </p>

                  <div className="flex flex-col divide-y divide-[#C5C2C2] border-t border-b border-[#C5C2C2]">
                    {category.services.map((service, index) => (
                      // индекс только для списка, как в других местах
                      <div
                        key={`${service.name}-${index}`}
                        className="flex items-center justify-between gap-2 py-3 md:py-4"
                      >
                        <div className="flex min-w-0 items-center gap-3 md:gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[14px] border border-[#DADADA] bg-[#F6F3EE] md:h-14 md:w-14">
                            {service.imageUrl ? (
                              <img
                                src={service.imageUrl}
                                alt={service.name}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <MockLogo className="h-8 w-8 md:h-10 md:w-10" />
                            )}
                          </div>
                          <span className="min-w-0 flex-1 text-[16px] text-secondary wrap-break-word md:text-[18px]">
                            {service.name}
                          </span>
                        </div>
                        <button
                          type="button"
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EDE8DE] md:h-10 md:w-10"
                          onClick={() =>
                            categoryServices.removeServiceFromCategory(
                              category.id,
                              index,
                            )
                          }
                          aria-label="Удалить услугу"
                        >
                          <DeleteIcon className="h-4 w-4 md:h-auto md:w-auto" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <BlackButton
                    className="mt-2 w-full rounded-full px-6 text-sm md:w-fit md:px-8 md:text-base"
                    onClick={() =>
                      categoryServices.openServiceModal(category.id)
                    }
                  >
                    Добавить услугу
                  </BlackButton>
                </div>
              )}
            </div>
          );
        })}

        <div ref={categoryMenu.ref} className="relative">
          <Button
            className="flex h-14 w-full items-center justify-between rounded-[20px]! bg-accent-septenary! px-4 text-left text-[16px] font-semibold text-white! hover:bg-secondary! active:bg-[#201F1F]! disabled:bg-[#C5C2C2]! md:h-16 md:px-6 md:text-[20px]"
            onClick={categoryMenu.toggle}
            disabled={categoryMenu.availableCategories.length === 0}
          >
            <span>Добавить категорию</span>
            <PlusIcon className="h-4 w-4 shrink-0 md:h-auto md:w-auto" />
          </Button>

          {categoryMenu.isOpen ? (
            <div className="absolute left-0 top-full z-10 mt-2 w-full overflow-hidden rounded-[18px] border border-[#E5E5E5] bg-white">
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
            </div>
          ) : null}
        </div>

        <Button
          type="button"
          onClick={() => categoryServices.saveAndSendToModeration()}
          disabled={categoryServices.isSavePending}
          className="w-full cursor-pointer disabled:cursor-not-allowed px-1! text-sm md:text-[16px]"
          aria-disabled={categoryServices.isSavePending}
        >
          Сохранить и отправить на модерацию
        </Button>

        {serviceModal.isOpen ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 md:px-4">
            <div className="w-full max-w-[760px] rounded-[20px] bg-white p-5 md:rounded-[30px] md:p-8">
              <SectionTitle
                className="text-[24px] font-semibold text-secondary md:text-[30px]"
                title="Новая услуга"
              />

              <div className="mt-4 flex flex-col gap-4 md:mt-6 md:grid md:grid-cols-[140px_1fr]">
                <label className="flex h-24 w-24 cursor-pointer items-center justify-center overflow-hidden rounded-[15px] border border-[#DADADA] bg-[#F6F6F6] text-center text-xs text-[#C5C2C2] md:h-32 md:w-32 md:rounded-[20px] md:text-sm">
                  <input
                    type="file"
                    className="sr-only"
                    accept="image/png,image/jpeg,image/webp"
                    onChange={(event) => {
                      const file = event.target.files?.[0];
                      if (file) {
                        serviceModal.handleServiceImageUpload(file);
                        event.currentTarget.value = "";
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
                    <span className="px-2">Загрузите фотографию</span>
                  )}
                </label>
                <div className="flex h-24 w-full flex-col gap-2 md:h-32">
                  <input
                    type="text"
                    placeholder="Название услуги"
                    value={serviceModal.serviceName}
                    onChange={(event) =>
                      serviceModal.setServiceName(event.target.value)
                    }
                    maxLength={100}
                    className="h-full w-full rounded-[15px] border border-[#DADADA] px-4 text-sm text-secondary outline-none placeholder:text-[#C5C2C2] md:rounded-[20px] md:px-5 md:text-base"
                  />
                  <span className="text-xs text-accent-quinary">
                    {serviceModal.serviceName.length}/100
                  </span>
                </div>
              </div>

              <div className="mt-4 md:mt-5">
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-[15px] border border-[#DADADA] px-4 py-3 text-sm text-secondary md:rounded-[18px] md:px-5 md:py-4 md:text-base"
                  onClick={serviceModal.toggleSelect}
                >
                  <span className="truncate">
                    {serviceModal.selectedService ?? "Выберите категорию"}
                  </span>
                  <span className="ml-2 shrink-0 text-base md:text-lg">⌄</span>
                </button>
                {serviceModal.isSelectOpen ? (
                  <div className="mt-2 max-h-48 overflow-auto rounded-[15px] border border-[#E5E5E5] bg-white md:rounded-[18px]">
                    {serviceModal.services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        className="flex w-full items-center px-4 py-2.5 text-left text-sm text-secondary hover:bg-[#F5F5F5] md:px-5 md:py-3"
                        onClick={() => serviceModal.selectService(service)}
                      >
                        {service}
                      </button>
                    ))}
                    {serviceModal.services.length === 0 ? (
                      <div className="px-4 py-2.5 text-sm text-accent-quinary md:px-5 md:py-3">
                        Нет доступных подкатегорий
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>

              <div className="mt-6 flex flex-col gap-3 md:mt-8 sm:flex-row sm:items-center sm:justify-between">
                <Button
                  className="h-11 w-full rounded-full bg-accent-septenary! text-sm text-white! hover:bg-secondary! active:bg-[#201F1F]! disabled:bg-[#C5C2C2]! sm:h-12 sm:w-[240px] sm:text-base"
                  onClick={serviceModal.close}
                >
                  Отменить
                </Button>
                <Button
                  className="h-11 w-full rounded-full bg-primary! text-sm text-accent-senary! hover:bg-accent! active:bg-[#80D62C]! disabled:bg-[#D3EBBB]! sm:h-12 sm:w-[240px] sm:text-base"
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
    </StateProvider>
  );
};
