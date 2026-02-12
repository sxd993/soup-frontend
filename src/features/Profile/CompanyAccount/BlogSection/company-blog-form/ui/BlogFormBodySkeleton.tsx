export const BlogFormBodySkeleton = () => {
  return (
    <div className="bg-white p-5 flex flex-col gap-4 rounded-[20px] w-full animate-pulse">
      <div className="h-6 w-40 bg-accent-quaternary rounded" />
      <div className="h-40 w-full bg-accent-quaternary rounded" />
      <div className="h-12 w-full bg-accent-quaternary rounded" />
      <div className="h-32 w-full bg-accent-quaternary rounded" />
      <div className="h-8 w-48 bg-accent-quaternary rounded" />
    </div>
  )
}
