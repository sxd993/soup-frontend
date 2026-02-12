export const CompanyBlogListSkeleton = () => {
  return (
    <div className="flex flex-col gap-5">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-[20px] animate-pulse"
        >
          <div className="h-4 w-32 bg-accent-quaternary rounded mb-3" />
          <div className="h-6 w-3/4 bg-accent-quaternary rounded mb-2" />
          <div className="h-4 w-full bg-accent-quaternary rounded mb-1" />
          <div className="h-4 w-5/6 bg-accent-quaternary rounded mb-4" />
          <div className="h-8 w-24 bg-accent-quaternary rounded" />
        </div>
      ))}
    </div>
  )
}
