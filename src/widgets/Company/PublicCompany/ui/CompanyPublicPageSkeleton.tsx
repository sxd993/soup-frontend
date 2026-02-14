export const CompanyPublicPageSkeleton = () => {
  return (
    <section className="mt-8 pb-16 animate-pulse" aria-busy="true">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-6">
          {/* Header skeleton */}
          <div className="rounded-[26px] bg-white p-6 flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className="h-20 w-20 rounded-2xl bg-gray-200" />
              <div className="flex-1 flex flex-col gap-2">
                <div className="h-7 w-48 bg-gray-200 rounded" />
                <div className="h-4 w-32 bg-gray-200 rounded" />
              </div>
            </div>
            <div className="h-16 w-full bg-gray-200 rounded" />
            <div className="h-10 w-40 bg-gray-200 rounded-full" />
          </div>

          {/* Tabs skeleton */}
          <div className="flex gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-10 w-24 bg-gray-200 rounded-full" />
            ))}
          </div>

          {/* Content skeleton */}
          <div className="rounded-[26px] bg-white p-6 flex flex-col gap-4">
            <div className="h-6 w-40 bg-gray-200 rounded" />
            <div className="h-32 w-full bg-gray-200 rounded" />
            <div className="h-32 w-full bg-gray-200 rounded" />
          </div>
        </div>

        {/* Sidebar skeleton */}
        <aside className="flex flex-col gap-6">
          <div className="rounded-[26px] bg-white p-5">
            <div className="h-6 w-40 bg-gray-200 rounded mb-4" />
            <div className="flex flex-col gap-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-[12px] bg-gray-200" />
                  <div className="flex flex-col gap-1">
                    <div className="h-4 w-32 bg-gray-200 rounded" />
                    <div className="h-3 w-20 bg-gray-200 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-40 w-full bg-gray-200 rounded-[26px]" />
        </aside>
      </div>
    </section>
  );
};
