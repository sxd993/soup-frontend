export const ScrollCatalogListSkeleton = () => {
  return (
    <div className="flex flex-col gap-6 animate-pulse" aria-busy="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <article key={index} className="rounded-3xl bg-white p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="flex gap-4">
              <div className="h-16 w-16 rounded-2xl bg-gray-200" />
              <div className="flex flex-col gap-2">
                <div className="h-6 w-48 bg-gray-200 rounded" />
                <div className="h-4 w-32 bg-gray-200 rounded" />
              </div>
            </div>
            <div className="h-10 w-10 rounded-full bg-gray-200" />
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-5/6 bg-gray-200 rounded" />
          </div>
        </article>
      ))}
    </div>
  );
};
