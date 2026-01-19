import { useMemo } from "react";
import { useTimeFilterStore } from "../store/timeFilterStore";

export const useTimeFilter = () => {
    const isOpen = useTimeFilterStore((state) => state.isOpen);
    const toggleOpen = useTimeFilterStore((state) => state.toggleOpen);
    const setOpen = useTimeFilterStore((state) => state.setOpen);
    const selectedTimeId = useTimeFilterStore((state) => state.selectedTimeId);
    const setSelectedTime = useTimeFilterStore((state) => state.setSelectedTime);

    return useMemo(
        () => ({
            isOpen,
            toggleOpen,
            setOpen,
            selectedTimeId,
            setSelectedTime,
        }),
        [isOpen, toggleOpen, setOpen, selectedTimeId, setSelectedTime],
    );
};