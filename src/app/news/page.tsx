import type { Metadata } from "next";
import { ScrollNewsList } from "@/widgets/News";
import { NewsCardBig, getPriorityNews } from "@/entities/News";
import { FilterSection, SectionTitle } from "@/shared/ui";

export const metadata: Metadata = {
    title: "Новости",
    description: "Студия уникальных проектов",
};

export default function NewsPage() {
    const { item: bigNewsItem, href } = getPriorityNews()

    return (
        <div className="flex flex-col mt-15">
            <SectionTitle title="Новости" className="mb-5" />
            <FilterSection />
            <div className="mt-6 flex flex-col gap-10">
                <div className="basis-1/2">
                    {bigNewsItem && !bigNewsItem.isAds && (
                        <NewsCardBig
                            item={bigNewsItem}
                            href={href}
                        />
                    )}
                </div>
                <div className="basis-1/2">
                    <ScrollNewsList />
                </div>

            </div>
        </div>
    )
}