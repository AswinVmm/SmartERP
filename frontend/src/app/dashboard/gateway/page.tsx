"use client";

import { useKeyboard } from "@/hooks/useKeyboard";

export default function Gateway() {
    useKeyboard({
        m: () => (window.location.href = "/dashboard/masters"),
        t: () => (window.location.href = "/dashboard/transactions"),
    });

    return (
        <div className="p-10">
            <h1>Gateway of SmartERP</h1>
            <p>Press M → Masters</p>
            <p>Press T → Transactions</p>
        </div>
    );
}