"use client";

export function OrderFindPageSkeleton() {
  return (
    <div className="mt-15 pb-20 animate-pulse" aria-busy="true">
      {/* Заголовок */}
      <div className="mb-8 h-10 w-64 rounded-lg bg-gray-200" />

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr_280px]">
        {/* Фильтры */}
        <aside className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="h-5 w-16 rounded bg-gray-200" />
            <div className="h-11 w-full rounded-full bg-gray-200" />
            <div className="mt-2 flex h-[180px] flex-col gap-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-5 w-3/4 rounded bg-gray-200" />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-5 w-40 rounded bg-gray-200" />
            <div className="flex flex-col gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-5 w-5 shrink-0 rounded bg-gray-200" />
                  <div className="h-5 flex-1 rounded bg-gray-200" />
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Список заказов */}
        <section className="flex flex-col gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-[116px] rounded-[20px] bg-white"
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}
            >
              <div className="flex h-full gap-4 px-5 pb-5 pt-4">
                <div className="h-[50px] w-[50px] shrink-0 rounded-lg bg-gray-200" />
                <div className="min-w-0 flex-1 space-y-2">
                  <div className="h-5 w-4/5 rounded bg-gray-200" />
                  <div className="h-4 w-1/3 rounded bg-gray-100" />
                  <div className="h-4 w-1/4 rounded bg-gray-100" />
                </div>
                <div className="h-8 w-24 shrink-0 rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </section>

        {/* Баннер */}
        <aside className="flex flex-col gap-6">
          <div className="h-[370px] w-[280px] shrink-0 rounded-[20px] bg-gray-200" />
        </aside>
      </div>
    </div>
  );
}
