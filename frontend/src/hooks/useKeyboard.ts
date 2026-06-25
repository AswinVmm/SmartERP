import { useEffect } from "react";

export const useKeyboard = (handlers: any) => {
    useEffect(() => {
        const handle = (e: KeyboardEvent) => {
            const key = e.altKey ? `Alt+${e.key}` : e.key;

            if (handlers[key]) {
                e.preventDefault();
                handlers[key]();
            }
        };

        window.addEventListener("keydown", handle);
        return () => window.removeEventListener("keydown", handle);
    }, [handlers]);
};