import React from "react";

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
        return (
            <div className="text-center py-10">
                <p className="text-accent-quinary">{loadingMessage}</p>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="text-center py-10">
                <p className="text-red-500">{errorMessage}</p>
            </div>
        );
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