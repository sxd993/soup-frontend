export const TariffPickerSkeleton = () => {
  return (
    <section className="bg-white rounded-[20px] p-5 animate-pulse">
      <div className="h-5 w-40 bg-accent-quaternary rounded mb-6" />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-32 rounded-[16px] bg-accent-quaternary"
          />
        ))}
      </div>
    </section>
  )
}
