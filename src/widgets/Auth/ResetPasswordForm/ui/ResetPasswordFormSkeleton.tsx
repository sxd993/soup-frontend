export const ResetPasswordFormSkeleton = () => {
  return (
    <div className="space-y-5 animate-pulse" aria-busy="true">
      {/* Поле пароля */}
      <div>
        <div className="h-4 w-24 bg-gray-200 rounded mb-2" />
        <div className="h-14 w-full bg-gray-200 rounded-full" />
      </div>

      {/* Поле подтверждения пароля */}
      <div>
        <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
        <div className="h-14 w-full bg-gray-200 rounded-full" />
      </div>

      {/* Кнопка отправки */}
      <div className="h-14 w-full bg-gray-200 rounded-full" />
    </div>
  )
}
