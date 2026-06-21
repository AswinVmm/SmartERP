import { useEffect } from "react";

export const useKeyboard = (map: any) => {
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key.toLowerCase();

            if (e.ctrlKey && key === "enter") {
                map["ctrl+enter"]?.();
            }

            if (map[key]) {
                e.preventDefault();
                map[key]();
            }
        };

        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, []);
};