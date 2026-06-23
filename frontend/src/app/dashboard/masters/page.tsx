"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { useSearchParams } from "next/navigation";
import { useAuthGuard } from "@/hooks/useAuthGuard";

useAuthGuard();

export default function Masters() {
    const [ledgers, setLedgers] = useState<any[]>([]);
    const params = useSearchParams();
    const companyId = params.get("company");

    useEffect(() => {
        fetchLedgers();
    }, []);

    const fetchLedgers = async () => {
        const res = await api.get(`/ledger/${companyId}`);
        setLedgers(res.data.data);
    };

    const createLedger = async () => {
        const name = prompt("Ledger name");
        if (!name) return;

        await api.post("/ledger", { name, companyId });
        fetchLedgers();
    };

    return (
        <div className="p-10">
            <h1>Ledgers</h1>

            <button onClick={createLedger}>+ Create Ledger</button>

            {ledgers.map((l) => (
                <div key={l.id}>{l.name}</div>
            ))}
        </div>
    );
}