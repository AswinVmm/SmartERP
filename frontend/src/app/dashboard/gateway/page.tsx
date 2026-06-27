"use client";

import { useState } from "react";
import { useKeyboard } from "@/hooks/useKeyboard";

const menu = [
    { name: "Masters", path: "/dashboard/masters" },
    { name: "Transactions", path: "/dashboard/transactions" },
    { name: "Reports", path: "/dashboard/reports" },
    { name: "Inventory", path: "/dashboard/inventory" },
];

export default function Gateway() {
    const [index, setIndex] = useState(0);

    const navigate = () => {
        window.location.href = menu[index].path;
    };

    useKeyboard({
        ArrowDown: () => setIndex((i) => (i + 1) % menu.length),
        ArrowUp: () => setIndex((i) => (i - 1 + menu.length) % menu.length),
        Enter: navigate,
        Escape: () => (window.location.href = "/companies"),
    });

    return (
        <div className="h-screen bg-black text-green-400 p-10 font-mono">
            <h1 className="text-2xl mb-6">Gateway of Tally</h1>

            <div className="space-y-2">
                {menu.map((item, i) => (
                    <div
                        key={i}
                        className={`p-2 ${i === index
                            ? "bg-green-400 text-black"
                            : ""
                            }`}
                    >
                        {item.name}
                    </div>
                ))}
            </div>

            <p className="mt-10 text-sm">
                ↑ ↓ Navigate | Enter Select | Esc Back
            </p>
        </div>
    );
}