import type { Metadata } from "next";
import { NewsFeedSection, NewsFiltersSection } from "@/widgets/News"
import { getNews, type NewsItem } from "@/entities/News"
import { SectionTitle } from "@/shared/ui"

export const metadata: Metadata = {
    title: "Новости",
    description: "Студия уникальных проектов",
};

export default async function NewsPage() {
    const news: NewsItem[] = await getNews()
    return (
        <div className="flex flex-col mt-15">
            <SectionTitle title="Новости" className="mb-5" />
            <NewsFiltersSection />
            <NewsFeedSection news={news} />
        </div>
    )
}