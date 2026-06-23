"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";

export const useAuthGuard = () => {
    const router = useRouter();

    useEffect(() => {
        const check = async () => {
            try {
                await api.get("/company"); // test auth
            } catch {
                router.push("/login");
            }
        };

        check();
    }, []);
};