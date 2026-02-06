import type { Metadata } from "next";
import { NewsFeedSection, NewsFiltersSection } from "@/widgets/News";
import { getNews, type NewsItem } from "@/entities/News";
import { SectionTitle } from "@/shared/ui";
import { parseTimeParam } from "@/features/TimeFilter";

export const metadata: Metadata = {
    title: "Новости",
    description: "Студия уникальных проектов",
};

type NewsPageProps = {
    searchParams: Promise<{ time?: string }>;
};

export default async function NewsPage({ searchParams }: NewsPageProps) {
    const params = await searchParams;
    const time = parseTimeParam(params.time ?? null);
    const news: NewsItem[] = await getNews(time);
    return (
        <div className="flex flex-col mt-15">
            <SectionTitle title="Новости" className="mb-5" />
            <NewsFiltersSection />
            {/* Форма и список новостей */}
            <NewsFeedSection news={news} />
        </div>
    );
}