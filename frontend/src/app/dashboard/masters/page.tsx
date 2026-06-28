"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { getCompany } from "@/lib/company";
import { useKeyboard } from "@/hooks/useKeyboard";

const types = [
    "Customer",
    "Supplier",
    "Expense",
    "Income",
    "Bank",
    "Cash",
    "Stock",
];

export default function Masters() {
    const [ledgers, setLedgers] = useState<any[]>([]);
    const [index, setIndex] = useState(0);
    const [search, setSearch] = useState("");
    const companyId = getCompany();

    useEffect(() => {
        fetchLedgers();
    }, []);

    const fetchLedgers = async () => {
        const res = await api.get(`api/ledger/${companyId}`);
        setLedgers(res.data.data);
    };

    const filtered = ledgers.filter((l) =>
        l.name.toLowerCase().includes(search.toLowerCase())
    );

    const createLedger = async () => {
        const name = prompt("Ledger Name");
        const type = prompt(`Type:\n${types.join(", ")}`);

        if (!name || !type) return;

        await api.post("api/ledger", { name, type, companyId });
        fetchLedgers();
    };

    const editLedger = async () => {
        const l = filtered[index];
        const name = prompt("Edit Name", l.name);

        await api.put(`api/ledger/${l.id}`, { name });
        fetchLedgers();
    };

    const deleteLedger = async () => {
        const l = filtered[index];
        if (!confirm("Delete Ledger?")) return;

        await api.delete(`api/ledger/${l.id}`);
        fetchLedgers();
    };

    useKeyboard({
        ArrowDown: () =>
            setIndex((i) => (i + 1) % filtered.length),
        ArrowUp: () =>
            setIndex((i) => (i - 1 + filtered.length) % filtered.length),
        Enter: editLedger,
        Delete: deleteLedger,
        "Alt+c": createLedger,
        Escape: () => (window.location.href = "/dashboard/gateway"),
    });

    return (
        <div className="p-6 bg-black text-green-400 h-screen font-mono">
            <h1 className="text-xl mb-4">Ledger Masters</h1>

            <input
                placeholder="Search..."
                className="mb-4 p-2 bg-black border border-green-400 w-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="space-y-1">
                {filtered.map((l, i) => (
                    <div
                        key={l.id}
                        className={`p-2 flex justify-between ${i === index
                            ? "bg-green-400 text-black"
                            : ""
                            }`}
                    >
                        <span>{l.name}</span>
                        <span>{l.type}</span>
                    </div>
                ))}
            </div>

            <div className="mt-6 text-sm">
                Alt+C Create | Enter Edit | Del Delete | Esc Back
            </div>
        </div>
    );
}