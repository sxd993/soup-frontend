import { getNews, getUniqueBadgesFromNews, type NewsItem } from "@/entities/News";
import { SectionTitle } from "@/shared/ui";
import type { TimeFilterValue } from "@/features/TimeFilter";
import { NewsFeedSection } from "../../ui/NewsFeedSection";
import { NewsFiltersSection } from "../../ui/NewsFiltersSection";

type NewsPageProps = {
    time: TimeFilterValue;
    badge: string | undefined;
};

export async function NewsPage({ time, badge }: NewsPageProps) {
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
