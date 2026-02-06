import type { Metadata } from "next";
import { NewsFeedSection, NewsFiltersSection } from "@/widgets/News";
import { getNews, getUniqueBadgesFromNews, type NewsItem } from "@/entities/News";
import { SectionTitle } from "@/shared/ui";
import { parseTimeParam } from "@/features/TimeFilter";

export const metadata: Metadata = {
    title: "Новости",
    description: "Студия уникальных проектов",
};

type NewsPageProps = {
    searchParams: Promise<{ time?: string; badge?: string }>;
};

export default async function NewsPage({ searchParams }: NewsPageProps) {
    const params = await searchParams;
    const time = parseTimeParam(params.time ?? null);
    const badge = params.badge ?? undefined;

    const [news, allForBadges] =
        badge === undefined
            ? [await getNews(time), null as NewsItem[] | null]
            : await Promise.all([getNews(time, badge), getNews(time)]);

    const badges = allForBadges
        ? getUniqueBadgesFromNews(allForBadges)
        : getUniqueBadgesFromNews(news);

    const fullList = allForBadges ?? news;
    const important = fullList[0] ?? null;
    const listNews = news.filter((n) => n.id !== important?.id);

    return (
        <div className="flex flex-col mt-15">
            <SectionTitle title="Новости" className="mb-5" />
            <NewsFiltersSection badges={badges} />
            <NewsFeedSection important={important} news={listNews} />
        </div>
    );
}