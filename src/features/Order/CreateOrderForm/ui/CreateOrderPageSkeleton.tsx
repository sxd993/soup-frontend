"use client";

export function CreateOrderPageSkeleton() {
  return (
    <main className="mt-[34px] pb-20 animate-pulse" aria-busy="true">
      <div className="mx-auto flex w-full max-w-[700px] flex-col gap-6">
        {/* Заголовок "Новый заказ" */}
        <div className="h-8 w-48 rounded-lg bg-gray-200" />

        {/* Карточка формы */}
        <div className="rounded-[20px] bg-white p-5">
          <div className="flex flex-col gap-4">
            {/* Название работ */}
            <div className="h-12 w-full rounded-[20px] bg-gray-200" />

            {/* Описание */}
            <div className="h-28 w-full rounded-[20px] bg-gray-200" />

            {/* Регион и категория */}
            <div className="grid grid-cols-2 gap-6">
              <div className="h-12 rounded-[20px] bg-gray-200" />
              <div className="h-12 rounded-[20px] bg-gray-200" />
            </div>

            {/* Бюджет, срок, файлы */}
            <div className="grid grid-cols-3 gap-6">
              <div className="h-12 rounded-[20px] bg-gray-200" />
              <div className="h-12 rounded-[20px] bg-gray-200" />
              <div className="h-12 rounded-[20px] bg-gray-200" />
            </div>

            {/* Строка "скрыть телефон" + переключатель */}
            <div className="flex items-center justify-between gap-4 rounded-[20px] py-2">
              <div className="h-4 w-72 rounded bg-gray-200" />
              <div className="h-6 w-11 rounded-full bg-gray-200" />
            </div>
          </div>
        </div>

        {/* Кнопка "Продолжить" */}
        <div className="flex justify-end pt-2">
          <div className="h-12 w-32 rounded-full bg-gray-200" />
        </div>
      </div>
    </main>
  );
}
