export const CompanyBlogSectionSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 animate-pulse" aria-busy="true">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="rounded-[26px] bg-white p-5 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-[10px] bg-gray-200" />
            <div className="flex flex-col gap-1">
              <div className="h-4 w-32 bg-gray-200 rounded" />
              <div className="h-3 w-20 bg-gray-200 rounded" />
            </div>
          </div>
          <div className="h-36 w-full bg-gray-200 rounded-[20px]" />
          <div className="h-5 w-3/4 bg-gray-200 rounded" />
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-5/6 bg-gray-200 rounded" />
          <div className="flex justify-end">
            <div className="h-8 w-28 bg-gray-200 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
};
