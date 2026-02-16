export function OrderFindDetailPageSkeleton() {
  return (
    <div className="mt-15 animate-pulse pb-20" aria-busy="true">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
        <section className="flex flex-col gap-4">
          <div className="rounded-[20px] bg-white p-5">
            <div className="flex items-start gap-4">
              <div className="h-[50px] w-[50px] rounded-lg bg-gray-200" />
              <div className="flex-1 space-y-3">
                <div className="h-8 w-3/4 rounded bg-gray-200" />
                <div className="h-4 w-1/2 rounded bg-gray-100" />
              </div>
              <div className="h-8 w-24 rounded bg-gray-200" />
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div className="h-10 w-[220px] rounded-full bg-gray-200" />
              <div className="h-4 w-20 rounded bg-gray-100" />
            </div>
          </div>

          <div className="rounded-[20px] bg-white p-5">
            <div className="h-7 w-40 rounded bg-gray-200" />
            <div className="mt-3 h-4 w-full rounded bg-gray-100" />
            <div className="mt-2 h-4 w-11/12 rounded bg-gray-100" />
            <div className="mt-2 h-4 w-10/12 rounded bg-gray-100" />
            <div className="mt-8 h-7 w-56 rounded bg-gray-200" />
            <div className="mt-3 h-4 w-1/3 rounded bg-gray-100" />
            <div className="mt-8 h-7 w-24 rounded bg-gray-200" />
            <div className="mt-3 h-4 w-24 rounded bg-gray-100" />
            <div className="mt-8 h-7 w-40 rounded bg-gray-200" />
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="h-24 rounded-xl bg-gray-100" />
              ))}
            </div>
          </div>
        </section>

        <aside className="flex flex-col gap-4">
          <div className="h-10 w-52 rounded bg-gray-200" />
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-[116px] rounded-[20px] bg-white px-5 py-4">
              <div className="h-6 w-11/12 rounded bg-gray-200" />
              <div className="mt-3 h-4 w-2/3 rounded bg-gray-100" />
              <div className="mt-2 h-4 w-1/2 rounded bg-gray-100" />
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}

