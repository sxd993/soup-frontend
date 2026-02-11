"use client";

import { useEffect, useRef } from "react";
import { showErrorToast } from "./toast";

export function useErrorToast(
    isError: boolean,
    errorMessage?: string,
    errorTitle?: string,
) {
    const shownRef = useRef(false);

    useEffect(() => {
        if (isError) {
            if (!shownRef.current && errorTitle !== undefined) {
                showErrorToast(errorTitle, errorMessage);
                shownRef.current = true;
            }
        } else {
            shownRef.current = false;
        }
    }, [isError, errorMessage, errorTitle]);
}
