export const VerifyFormSkeleton = () => {
  return (
    <div className="space-y-5 animate-pulse" aria-busy="true">
      {/* Поля для кода */}
      <div className="flex justify-center gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-14 w-12 bg-gray-200 rounded-xl" />
        ))}
      </div>

      {/* Кнопка отправки */}
      <div className="h-14 w-full bg-gray-200 rounded-full" />

      {/* Текст повторной отправки */}
      <div className="flex justify-center">
        <div className="h-4 w-48 bg-gray-200 rounded" />
      </div>
    </div>
  )
}
