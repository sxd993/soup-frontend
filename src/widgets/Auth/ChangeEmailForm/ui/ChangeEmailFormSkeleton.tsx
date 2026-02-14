export const ChangeEmailFormSkeleton = () => {
  return (
    <div className="space-y-5 animate-pulse" aria-busy="true">
      {/* Поле email */}
      <div>
        <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
        <div className="h-14 w-full bg-gray-200 rounded-full" />
      </div>

      {/* Кнопка отправки */}
      <div className="h-14 w-full bg-gray-200 rounded-full" />

      {/* Информационный текст */}
      <div className="flex justify-center">
        <div className="h-4 w-64 bg-gray-200 rounded" />
      </div>
    </div>
  )
}
