export const OrderListSkeleton = () => (
  <div className="flex flex-col gap-4">
    {[1, 2, 3].map((i) => (
      <div
        key={i}
        className="rounded-[20px] bg-white p-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between animate-pulse"
      >
        <div className="min-w-0 flex-1">
          <div className="h-5 w-3/4 bg-gray-200 rounded" />
          <div className="h-4 w-1/2 bg-gray-100 rounded mt-2" />
          <div className="h-4 w-1/3 bg-gray-100 rounded mt-2" />
        </div>
        <div className="h-10 w-28 bg-gray-200 rounded-[20px] shrink-0" />
      </div>
    ))}
  </div>
);
