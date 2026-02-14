export const NewsPageSkeleton = () => {
  return (
    <div className="flex flex-col mt-15 animate-pulse" aria-busy="true">
      {/* Заголовок */}
      <div className="h-8 w-40 bg-gray-200 rounded mb-5" />
      
      {/* Фильтры */}
      <div className="flex items-center gap-4 mb-6">
        <div className="h-10 w-32 bg-gray-200 rounded-full" />
        <div className="flex gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-8 w-24 bg-gray-200 rounded-full" />
          ))}
        </div>
      </div>

      {/* Важная новость */}
      <div className="bg-white rounded-[20px] p-6 mb-6">
        <div className="h-48 w-full bg-gray-200 rounded-xl mb-4" />
        <div className="h-6 w-3/4 bg-gray-200 rounded mb-2" />
        <div className="h-4 w-full bg-gray-200 rounded mb-1" />
        <div className="h-4 w-5/6 bg-gray-200 rounded" />
      </div>

      {/* Список новостей */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white rounded-[20px] p-5">
            <div className="h-32 w-full bg-gray-200 rounded-xl mb-3" />
            <div className="h-5 w-full bg-gray-200 rounded mb-2" />
            <div className="h-4 w-4/5 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    </div>
  )
}
