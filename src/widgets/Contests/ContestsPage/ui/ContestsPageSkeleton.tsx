export const ContestsPageSkeleton = () => {
  return (
    <div className="flex flex-col mt-15 animate-pulse" aria-busy="true">
      {/* Заголовок */}
      <div className="h-8 w-40 bg-gray-200 rounded mb-5" />

      {/* Поиск */}
      <div className="flex items-center gap-4 mb-7">
        <div className="flex-1 h-14 bg-gray-200 rounded-full" />
        <div className="h-14 w-32 bg-gray-200 rounded-full" />
      </div>

      {/* Табы и фильтр */}
      <div className="flex justify-between items-center gap-4 mb-5">
        <div className="flex gap-2">
          <div className="h-10 w-32 bg-gray-200 rounded-full" />
          <div className="h-10 w-32 bg-gray-200 rounded-full" />
        </div>
        <div className="h-10 w-40 bg-gray-200 rounded-full" />
      </div>

      {/* Список конкурсов */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white rounded-[20px] p-5">
            <div className="h-40 w-full bg-gray-200 rounded-xl mb-4" />
            <div className="h-6 w-full bg-gray-200 rounded mb-2" />
            <div className="h-4 w-3/4 bg-gray-200 rounded mb-3" />
            <div className="flex justify-between items-center">
              <div className="h-4 w-24 bg-gray-200 rounded" />
              <div className="h-8 w-20 bg-gray-200 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
