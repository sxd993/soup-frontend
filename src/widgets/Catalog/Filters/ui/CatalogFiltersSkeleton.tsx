export const CatalogFiltersSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 animate-pulse" aria-busy="true">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-gray-200" />
          <div className="flex-1 flex items-center justify-between">
            <div className="h-5 w-32 bg-gray-200 rounded" />
            <div className="h-4 w-4 bg-gray-200 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
};
