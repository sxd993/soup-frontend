export function NewsItemSkeleton() {
  return (
    <div className="flex flex-col lg:flex-row gap-15 lg:gap-40 mt-10 animate-pulse" aria-busy="true">
      <div className="flex-1 flex flex-col gap-6 basis-4/6">
        <div className="w-full h-[400px] md:h-[520px] bg-gray-200 rounded-[40px]" />
        <div className="h-8 w-4/5 bg-gray-200 rounded" />
        <div className="flex flex-col gap-4">
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-2/3 bg-gray-200 rounded" />
        </div>
        <div className="flex justify-end">
          <div className="h-4 w-24 bg-gray-200 rounded" />
        </div>
      </div>
      <div className="basis-2/10 flex flex-col gap-4">
        <div className="h-6 w-40 bg-gray-200 rounded" />
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="h-32 w-full bg-gray-200 rounded-[20px]" />
            <div className="h-4 w-3/4 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    </div>
  )
}
