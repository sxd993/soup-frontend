import React from "react";
import { LoadingState, ErrorState } from "@/shared/ui";

// Переиспользуемый компонент для отображения состояний загрузки, ошибок и пустых данных

type StateProviderProps = {
    isLoading: boolean;
    isError: boolean;
    isEmpty?: boolean;
    loadingMessage?: string;
    errorMessage?: string;
    emptyMessage?: string;
    children: React.ReactNode;
};

export const StateProvider = ({
    isLoading,
    isError,
    isEmpty = false,
    loadingMessage = "Загрузка...",
    errorMessage = "Ошибка при загрузке данных",
    emptyMessage = "Данные не найдены",
    children,
}: StateProviderProps) => {
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