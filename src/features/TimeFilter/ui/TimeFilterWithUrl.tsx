"use client";

import { useTimeQueryParam } from "../model/hooks/useTimeQueryParam";
import { TimeFilter } from "./TimeFilter";

export const TimeFilterWithUrl = () => {
    const [value, onChange] = useTimeQueryParam();
    return <TimeFilter value={value} onChange={onChange} />;
};
