export function OrderFindClientContactsSkeleton() {
  return (
    <div className="animate-pulse rounded-[20px] bg-white p-5">
      <div className="h-10 w-72 rounded bg-gray-200" />
      <div className="mt-8 flex items-start gap-4">
        <div className="h-[104px] w-[104px] rounded-[20px] bg-gray-200" />
        <div className="flex-1 space-y-3">
          <div className="h-8 w-56 rounded bg-gray-200" />
          <div className="h-6 w-80 rounded bg-gray-100" />
        </div>
      </div>
      <div className="mt-8 space-y-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-gray-200" />
            <div className="h-6 w-72 rounded bg-gray-100" />
          </div>
        ))}
      </div>
    </div>
  );
}

