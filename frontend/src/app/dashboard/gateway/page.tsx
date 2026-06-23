"use client";

import { useKeyboard } from "@/hooks/useKeyboard";
import { useSearchParams } from "next/navigation";
import { useAuthGuard } from "@/hooks/useAuthGuard";

useAuthGuard();

export default function Gateway() {
    const params = useSearchParams();
    const companyId = params.get("company");

    useKeyboard({
        m: () =>
            (window.location.href = `/dashboard/masters?company=${companyId}`),
        t: () =>
            (window.location.href = `/dashboard/transactions?company=${companyId}`),
    });

    return (
        <div className="p-10">
            <h1>Gateway of SmartERP</h1>
            <p>Press M → Masters</p>
            <p>Press T → Transactions</p>
        </div>
    );
}