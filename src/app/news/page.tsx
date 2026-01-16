import type { Metadata } from "next";
import { ScrollNewsList } from "@/widgets/News";
import { NewsCardBig, getNews } from "@/entities/News";
import type { NewsItem } from "@/entities/News";
import { FilterSection, SectionTitle } from "@/shared/ui";

export const metadata: Metadata = {
    title: "Новости",
    description: "Студия уникальных проектов",
};

export default async function NewsPage() {
    const news: NewsItem[] = await getNews()
    const priorityNews = news.find((item) => item.isImportantNew && !item.isAds)

    return (
        <div className="flex flex-col mt-15">
            <SectionTitle title="Новости" className="mb-5" />
            <FilterSection />
            <div className="mt-6 flex flex-col gap-10">
                <div className="basis-1/2">
                    <NewsCardBig item={priorityNews} />
                </div>
                <div className="basis-1/2">
                    <ScrollNewsList news={news} />
                </div>
            </div>
        </div>
    )
}