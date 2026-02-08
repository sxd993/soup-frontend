export function BlogItemSkeleton() {
  return (
    <div className="flex flex-col lg:flex-row gap-5 mt-20 animate-pulse" aria-busy="true">
      <div className="flex-1 flex flex-col basis-2/3">
        <div className="h-7 w-24 bg-gray-200 rounded mb-5" />
        <div className="mt-6 bg-white p-5 rounded-[20px] flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-[10px] bg-gray-200" />
            <div className="flex flex-col gap-1">
              <div className="h-4 w-32 bg-gray-200 rounded" />
              <div className="h-3 w-20 bg-gray-200 rounded" />
            </div>
          </div>
          <div className="h-48 w-full bg-gray-200 rounded-xl" />
          <div className="h-6 w-4/5 bg-gray-200 rounded" />
          <div className="h-4 w-full bg-gray-200 rounded" />
        </div>
      </div>
      <div className="basis-1/3 flex flex-col gap-6 lg:mt-20">
        <div className="h-40 w-full bg-gray-200 rounded-[20px]" />
        <div className="flex flex-col gap-4">
          <div className="h-6 w-44 bg-gray-200 rounded" />
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="h-28 w-full bg-gray-200 rounded-[20px]" />
              <div className="h-4 w-2/3 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
