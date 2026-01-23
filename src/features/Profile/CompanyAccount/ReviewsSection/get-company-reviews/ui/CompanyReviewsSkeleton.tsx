export const CompanyReviewsSkeleton = () => (
    <div className="flex-1 flex flex-col gap-6 max-w-[793px]">
        <div className="flex flex-col gap-2">
            <div className="h-6 w-28 bg-gray-200 rounded" />
            <div className="h-4 w-36 bg-gray-200 rounded" />
        </div>
        <div className="h-10 w-48 bg-gray-200 rounded-full" />
        <div className="flex flex-col gap-6">
            {[0, 1, 2].map((item) => (
                <div key={item} className="rounded-3xl bg-white p-6 shadow-sm">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                        <div className="flex flex-col gap-2">
                            <div className="h-5 w-40 bg-gray-200 rounded" />
                            <div className="h-4 w-28 bg-gray-200 rounded" />
                        </div>
                        <div className="flex flex-row items-center gap-2 md:flex-col md:items-end md:gap-2">
                            <div className="h-4 w-10 bg-gray-200 rounded" />
                            <div className="h-4 w-20 bg-gray-200 rounded" />
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col gap-2">
                        <div className="h-4 w-full bg-gray-200 rounded" />
                        <div className="h-4 w-5/6 bg-gray-200 rounded" />
                        <div className="h-4 w-3/5 bg-gray-200 rounded" />
                    </div>
                    <div className="mt-6 flex justify-end">
                        <div className="h-9 w-28 bg-gray-200 rounded-full" />
                    </div>
                </div>
            ))}
        </div>
    </div>
)
