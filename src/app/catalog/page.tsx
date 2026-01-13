import { AdsBanner, Button, Search, SectionTitle } from "@/shared/ui"
import { CatalogFilters } from "@/widgets/Catalog/Filters/ui/CatalogFilters"
import { ScrollCatalogList } from "@/widgets/Catalog/ScrollCatalogList/ui/ScrollCatalogList"

export default function CatalogPage() {
  return (
    <div className="mt-10 pb-20">
      <SectionTitle
        title="Каталог"
        className="text-[40px] leading-[110%] font-bold text-secondary"
      />
      <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center">
        <label className="relative flex-1">
          <span className="sr-only">Поиск по названию или услуге</span>
          <Search className="absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="поиск по названию или услуге"
            className="w-full rounded-full bg-white py-4 pl-12 pr-5 text-base font-medium text-secondary outline-none"
          />
        </label>
        <Button className="h-14 rounded-full px-10 text-base">Найти</Button>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr_280px]">
        <CatalogFilters />
        <ScrollCatalogList />
        <aside className="flex flex-col gap-6">
          <div className="rounded-3xl bg-white p-4">
            <AdsBanner hasDescription={true} />
          </div>
        </aside>
      </div>
    </div>
  )
}
