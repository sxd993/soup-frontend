export const CompanyServicesSkeleton = () => {
  return (
    <section className="flex flex-col gap-6 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="h-8 w-40 bg-accent-quaternary rounded" />
      </div>

      {Array.from({ length: 2 }).map((_, index) => (
        <div
          key={index}
          className="rounded-[30px] bg-white p-6"
        >
          <div className="h-6 w-48 bg-accent-quaternary rounded mb-4" />
          <div className="mt-4 flex flex-col gap-4">
            <div className="h-5 w-24 bg-accent-quaternary rounded" />
            <div className="flex flex-col divide-y divide-[#E5E0D6] border-t border-[#E5E0D6]">
              {Array.from({ length: 3 }).map((__, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-4"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="h-14 w-14 rounded-[14px] bg-accent-quaternary" />
                    <div className="h-4 w-40 bg-accent-quaternary rounded" />
                  </div>
                  <div className="h-10 w-10 rounded-full bg-accent-quaternary" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
