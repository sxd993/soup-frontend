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
            <div className="mt-6 lg:flex gap-10">
                <div className="basis-1/2">
                    <BigNewCard />
                </div>
                <div className="basis-1/2">
                    <ScrollNewsList />
                </div>

            </div>
        </div>
    )
}