import type { Metadata } from "next";
import { FilterSection, ScrollNewsList } from "@/widgets/News";
import { BigNewCard } from "@/shared/ui/BigNewCard/ui/BigNewCard";

export const metadata: Metadata = {
    title: "Новости",
    description: "Студия уникальных проектов",
};

export default function NewsPage() {
    return (
        <div className="flex flex-col mt-10">
            <FilterSection />
            <div className="mt-6">
                <BigNewCard />
            </div>
            <ScrollNewsList />
        </div>
    )
}