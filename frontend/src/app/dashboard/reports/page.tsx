"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { useSearchParams } from "next/navigation";
import { useAuthGuard } from "@/hooks/useAuthGuard";

useAuthGuard();

export default function Reports() {
    const [data, setData] = useState<any[]>([]);
    const params = useSearchParams();
    const companyId = params.get("company");

    useEffect(() => {
        fetchTB();
    }, []);

    const fetchTB = async () => {
        const res = await api.get(`api/reports/trial-balance/${companyId}`);
        setData(res.data);
    };

    return (
        <div>
            <h1 className="text-xl font-bold">Trial Balance</h1>

            {data.map((row, i) => (
                <div key={i} className="flex justify-between border-b py-1">
                    <span>{row.ledger}</span>
                    <span>{row.debit}</span>
                    <span>{row.credit}</span>
                </div>
            ))}
        </div>
    );
}