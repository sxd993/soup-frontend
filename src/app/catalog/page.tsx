import { Suspense } from "react";
import { Button, Search, SectionTitle } from "@/shared/ui";
import { CatalogFilters } from "@/widgets/Catalog/Filters/ui/CatalogFilters";
import { ScrollCatalogList } from "@/widgets/Catalog/ScrollCatalogList/ui/ScrollCatalogList";

export default function CatalogPage() {
  return (
    <div className="mt-15 pb-20">
      <SectionTitle title="Каталог" className="mb-5 text-[40px] leading-[110%] font-bold text-secondary" />
      <div className="mt-8 flex items-center gap-4">
        <div className="flex-1 hidden md:block">
          <div className="relative">
            <Search className="absolute w-4 h-4 left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="поиск по названию или услуге"
              className="w-full pl-10 pr-4 py-2.5 rounded-[20px] bg-white focus:outline-none font-semibold text-sm placeholder:text-accent-septenary placeholder:font-normal"
            />
          </div>
        </div>
        <Button className="hidden md:block cursor-pointer">Найти</Button>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] lg:gap-x-12">
        <CatalogFilters />
        <Suspense fallback={null}>
          <ScrollCatalogList />
        </Suspense>
      </div>
    </div>
  );
}
