import React from "react";
import { LoadingState } from "./LoadingState";
import { ErrorState } from "./ErrorState";

// Переиспользуемый компонент для отображения состояний загрузки, ошибок и пустых данных

type QueryStateProps = {
    isLoading: boolean;
    isError: boolean;
    isEmpty?: boolean;
    loadingMessage?: string;
    errorMessage?: string;
    emptyMessage?: string;
    children: React.ReactNode;
};

export const QueryState = ({
    isLoading,
    isError,
    isEmpty = false,
    loadingMessage = "Загрузка...",
    errorMessage = "Ошибка при загрузке данных",
    emptyMessage = "Данные не найдены",
    children,
}: QueryStateProps) => {
    if (isLoading) {
        return <LoadingState message={loadingMessage} />;
    }

    if (isError) {
        return <ErrorState message={errorMessage} />;
    }

    if (isEmpty) {
        return (
            <div className="text-center py-10">
                <p className="text-accent-quinary">{emptyMessage}</p>
            </div>
        );
    }

    return <>{children}</>;
};