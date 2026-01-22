export const CompanyAccountFormSkeleton = () => (
    <div className="flex-1 flex flex-col gap-5 max-w-[793px]">
        <div className="bg-white p-5 flex flex-col gap-4.5 rounded-[20px]">
            <div className="h-6 w-48 bg-gray-200 rounded" />
            <div className="flex flex-col gap-3">
                <div className="h-10 bg-gray-200 rounded" />
                <div className="h-20 bg-gray-200 rounded" />
                <div className="h-10 bg-gray-200 rounded" />
            </div>
        </div>
        <div className="bg-white p-5 flex flex-col gap-4.5 rounded-[20px]">
            <div className="h-6 w-40 bg-gray-200 rounded" />
            <div className="flex flex-col gap-3">
                <div className="flex gap-5">
                    <div className="h-10 flex-1 bg-gray-200 rounded" />
                    <div className="h-10 flex-1 bg-gray-200 rounded" />
                </div>
                <div className="h-10 bg-gray-200 rounded" />
            </div>
        </div>
        <div className="bg-white p-5 flex flex-col gap-4.5 rounded-[20px]">
            <div className="h-6 w-44 bg-gray-200 rounded" />
            <div className="grid grid-cols-2 gap-3">
                <div className="h-10 bg-gray-200 rounded" />
                <div className="h-10 bg-gray-200 rounded" />
                <div className="h-10 bg-gray-200 rounded" />
                <div className="h-10 bg-gray-200 rounded" />
            </div>
        </div>
        <div className="bg-white p-5 flex flex-col gap-4.5 rounded-[20px]">
            <div className="h-6 w-52 bg-gray-200 rounded" />
            <div className="h-10 bg-gray-200 rounded" />
        </div>
        <div className="h-10 w-32 bg-gray-200 rounded self-end" />
    </div>
)