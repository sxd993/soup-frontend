import { useNewsBadgeStore } from "../store/newsBadgeStore";

export const useNewsBadgeFilterState = () => {
    const badges = useNewsBadgeStore((state) => state.badges);
    const selectedBadge = useNewsBadgeStore((state) => state.selectedBadge);
    const badgesInitialized = useNewsBadgeStore((state) => state.badgesInitialized);
    const setBadges = useNewsBadgeStore((state) => state.setBadges);
    const setSelectedBadge = useNewsBadgeStore((state) => state.setSelectedBadge);

    return {
        badges,
        selectedBadge,
        badgesInitialized,
        setBadges,
        setSelectedBadge,
    };
};