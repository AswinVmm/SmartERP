"use client";

import { useEffect } from "react";

export const useGlobalKeys = () => {
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.altKey && e.key === "c") {
                window.location.href = "/companies";
            }

            if (e.altKey && e.key === "g") {
                window.location.href = "/dashboard/gateway";
            }
        };

        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, []);
};