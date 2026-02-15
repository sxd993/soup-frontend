export const OrderFindRegionsSkeleton = () => {
  return (
    <div className="flex h-[180px] flex-col gap-3 pl-4 pr-1 animate-pulse" aria-busy="true">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="flex items-center gap-3">
          <div className="h-5 w-5 rounded-[6px] bg-gray-200" />
          <div className="h-4 w-32 rounded bg-gray-200" />
        </div>
      ))}
    </div>
  );
};
