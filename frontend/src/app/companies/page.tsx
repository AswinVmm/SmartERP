"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export default function Companies() {
    const [companies, setCompanies] = useState<any[]>([]);

    useEffect(() => {
        fetchCompanies();
    }, []);

    const fetchCompanies = async () => {
        const res = await api.get("/company");
        setCompanies(res.data.data);
    };

    const createCompany = async () => {
        const name = prompt("Company name");
        if (!name) return;

        await api.post("/company", { name });
        fetchCompanies();
    };

    return (
        <div className="p-10">
            <h1 className="text-xl font-bold">Companies</h1>

            <button onClick={createCompany}>+ Create</button>

            <div className="mt-5 space-y-2">
                {companies.map((c) => (
                    <div
                        key={c.id}
                        className="border p-3 cursor-pointer"
                        onClick={() =>
                            (window.location.href = `/dashboard/gateway?company=${c.id}`)
                        }
                    >
                        {c.name}
                    </div>
                ))}
            </div>
        </div>
    );
}