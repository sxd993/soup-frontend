"use client"

export const CompanyOrdersSkeleton = () => (
    <div className="flex-1 flex flex-col gap-6 max-w-[793px]">
        <div className="flex flex-col gap-2">
            <div className="h-6 w-28 bg-gray-200 rounded" />
            <div className="h-4 w-36 bg-gray-200 rounded" />
        </div>
        <div className="h-10 w-80 bg-gray-200 rounded-full" />
        <div className="flex flex-col gap-6">
            {[0, 1, 2].map((item) => (
                <div key={item} className="rounded-[20px] bg-white p-5 shadow-sm">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-gray-200" />
                            <div className="flex flex-col gap-2">
                                <div className="h-5 w-52 rounded bg-gray-200" />
                                <div className="h-4 w-28 rounded bg-gray-200" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 md:items-end">
                            <div className="h-4 w-24 rounded bg-gray-200" />
                            <div className="h-4 w-20 rounded bg-gray-200" />
                        </div>
                    </div>
                    <div className="mt-4 h-4 w-40 rounded bg-gray-200" />
                </div>
            ))}
        </div>
    </div>
)
