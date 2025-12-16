import type { Metadata } from "next";
import { NewsSection } from "@/widgets/Home/NewsSection";
import { FilterSection, BottomNewsSection } from "@/widgets/News";

export const metadata: Metadata = {
    title: "Новости",
    description: "Студия уникальных проектов",
};

export default function NewsPage() {
    return (
        <div className="flex flex-col mt-10">
            <FilterSection />
            <NewsSection />
            <BottomNewsSection />
        </div>
    )
}