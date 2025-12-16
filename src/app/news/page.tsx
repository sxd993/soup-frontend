import { NewsSection } from "@/widgets/Home/NewsSection";
import { FilterSection } from "@/widgets/News";

export default function NewsPage() {
    return (
        <div className="flex flex-col mt-10">
            <FilterSection />
            <NewsSection />
        </div>
    )
}