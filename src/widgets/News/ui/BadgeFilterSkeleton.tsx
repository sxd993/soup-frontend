export const BadgeFilterSkeleton = () => {
  return (
    <div className="relative animate-pulse" aria-busy="true">
      {/* Мобильная кнопка */}
      <button
        type="button"
        disabled
        className="flex md:hidden gap-2 items-center cursor-pointer"
      >
        <div className="h-5 w-24 bg-gray-200 rounded" />
        <div className="h-4 w-4 bg-gray-200 rounded" />
      </button>

      {/* Десктоп бейджи */}
      <div className="hidden md:flex flex-row gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-8 w-20 bg-gray-200 rounded-full" />
        ))}
      </div>
    </div>
  )
}
