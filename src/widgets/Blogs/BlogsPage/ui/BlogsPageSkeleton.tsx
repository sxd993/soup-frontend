export const BlogsPageSkeleton = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 mt-15 animate-pulse" aria-busy="true">
      <div className="flex-1 flex flex-col basis-2/3">
        {/* Заголовок */}
        <div className="h-7 w-24 bg-gray-200 rounded mb-5" />
        
        {/* Список блогов */}
        <div className="mt-6 flex flex-col gap-5">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-white p-5 rounded-[20px]">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-10 w-10 rounded-[10px] bg-gray-200" />
                <div className="flex flex-col gap-1">
                  <div className="h-4 w-32 bg-gray-200 rounded" />
                  <div className="h-3 w-20 bg-gray-200 rounded" />
                </div>
              </div>
              <div className="h-36 w-full bg-gray-200 rounded-[20px] mb-4" />
              <div className="h-6 w-3/4 bg-gray-200 rounded mb-2" />
              <div className="h-4 w-full bg-gray-200 rounded mb-1" />
              <div className="h-4 w-5/6 bg-gray-200 rounded mb-4" />
              <div className="flex justify-end">
                <div className="h-8 w-24 bg-gray-200 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Сайдбар */}
      <div className="basis-1/3 flex flex-col gap-6 lg:mt-20">
        <div className="h-40 w-full bg-gray-200 rounded-[20px]" />
        <div className="bg-white rounded-[20px] p-4">
          <div className="h-6 w-44 bg-gray-200 rounded mb-4" />
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="mb-4">
              <div className="h-24 w-full bg-gray-200 rounded-xl mb-2" />
              <div className="h-4 w-3/4 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
