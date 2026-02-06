import { useEffect, useMemo } from "react";
import type { NewsItem } from "@/entities/News";
import { useNewsBadgeFilterState } from "./useNewsBadgeFilterState";

const getNewsBadges = (news: NewsItem[]) => {
    const badges = news
        .filter((item) => !item.isAds)
        .map((item) => item.category);
    return badges.filter((badge, index, array) => array.indexOf(badge) === index);
};

export const useFilteredNewsList = (news: NewsItem[]) => {
    const { badges, selectedBadge, setBadges, setSelectedBadge } = useNewsBadgeFilterState();

    const availableBadges = useMemo(() => getNewsBadges(news), [news]);

    // Синхронизация доступных бейджей с источником новостей.
    useEffect(() => {
        setBadges(availableBadges);
        if (selectedBadge && !availableBadges.includes(selectedBadge)) {
            setSelectedBadge(null);
        }
    }, [availableBadges, selectedBadge, setBadges, setSelectedBadge]);

    const filteredNews = useMemo(() => {
        // Реклама всегда показывается независимо от фильтров.
        if (!selectedBadge) {
            return news;
        }
        return news.filter((item) => {
            if (item.isAds) return true;
            return item.category === selectedBadge;
        });
    }, [news, selectedBadge]);

    return {
        badges,
        filteredNews,
        selectedBadge,
    };
};