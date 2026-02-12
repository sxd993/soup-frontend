"use client";

import React from "react";
import { EmptyState, ErrorState, LoadingState, useErrorToast } from "@/shared/ui";

// Переиспользуемый компонент для отображения состояний загрузки, ошибок и пустых данных. При ошибке показывается тост и блок ErrorState.

type StateProviderProps = {
    isLoading?: boolean;
    isError: boolean;
    isEmpty?: boolean;
    errorTitle?: string;
    errorMessage?: string;
    loadingComponent?: React.ReactNode;
    emptyComponent?: React.ReactNode;
    children: React.ReactNode;
};

export const StateProvider = ({
    isLoading,
    isError,
    isEmpty = false,
    errorTitle,
    errorMessage,
    loadingComponent,
    emptyComponent,
    children,
}: StateProviderProps) => {
    useErrorToast(isError, errorMessage, errorTitle);

    if (isLoading) {
        return <>{loadingComponent ?? <LoadingState />}</>;
    }

    if (isError) {
        return (
            <ErrorState
                title={errorTitle}
                subTitle={errorMessage}
            />
        );
    }

    if (isEmpty) {
        if (emptyComponent) {
            return <>{emptyComponent}</>;
        }

        return (
            <div className="flex w-full min-h-[60vh] justify-center items-center">
                <EmptyState />
            </div>
        );
    }

    return <>{children}</>;
};
