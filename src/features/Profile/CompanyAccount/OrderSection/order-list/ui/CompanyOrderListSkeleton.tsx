export const CompanyOrderListSkeleton = () => (
  <div className="flex flex-col gap-4">
    {[1, 2, 3].map((i) => (
      <div
        key={i}
        className="animate-pulse rounded-[20px] bg-white p-5 sm:flex sm:items-center sm:justify-between"
      >
        <div className="min-w-0 flex-1">
          <div className="h-5 w-3/4 rounded bg-gray-200" />
          <div className="mt-2 h-4 w-1/2 rounded bg-gray-100" />
          <div className="mt-2 h-4 w-1/3 rounded bg-gray-100" />
        </div>
      </div>
    ))}
  </div>
);
