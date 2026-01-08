import { Button, Search, SortIcon } from "@/shared/ui"
import { ACTIVITY_FILTERS, CATEGORY_FILTERS, REGION_FILTERS } from "@/entities/Company/model/const/filters"

export const CatalogFilters = () => {
  return (
    <aside className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 rounded-3xl bg-white p-5">
        <p className="text-base font-semibold text-secondary">Регион</p>
        <label className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" />
          <input
            type="text"
            placeholder="поиск по региону"
            className="w-full rounded-full bg-[#F6F3EE] py-2 pl-9 pr-4 text-sm text-secondary outline-none"
          />
        </label>
        <div className="flex flex-col gap-3">
          {REGION_FILTERS.map((region) => (
            <label key={region.id} className="flex items-center gap-3 text-sm text-secondary">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-[#C5C2C2] text-primary accent-primary"
                defaultChecked={Boolean(region.isSelected)}
              />
              {region.label}
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-3xl bg-white p-5">
        <p className="text-base font-semibold text-secondary">Сфера деятельности</p>
        <div className="flex flex-col gap-3">
          {ACTIVITY_FILTERS.map((activity) => (
            <label key={activity.id} className="flex items-center gap-3 text-sm text-secondary">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-[#C5C2C2] text-primary accent-primary"
                defaultChecked={Boolean(activity.isSelected)}
              />
              {activity.label}
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 rounded-3xl bg-white p-5">
        {CATEGORY_FILTERS.map((item) => (
          <button
            key={item.id}
            type="button"
            className="flex items-center justify-between rounded-full border border-[#E5E0D6] px-4 py-3 text-sm font-semibold text-secondary hover:bg-[#F6F3EE]"
          >
            <span>{item.label}</span>
            <SortIcon />
          </button>
        ))}
        <Button className="mt-3 w-full rounded-full bg-primary text-accent-senary">
          Сбросить все
        </Button>
      </div>
    </aside>
  )
}
