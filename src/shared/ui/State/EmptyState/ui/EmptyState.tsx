import React from "react";
import { Empty } from "antd";

type EmptyStateProps = {
    description?: React.ReactNode;
    className?: string;
};

export function EmptyState({
    description = "Нет данных",
    className,
}: EmptyStateProps) {
    return (
        <Empty
            description={description}
            className={className}
        />
    );
}
