"use client";

import { useState } from "react";
import { useKeyboard } from "@/hooks/useKeyboard";

const menu = [
    { name: "Companies", path: "/companies" },
    { name: "Gateway", path: "/dashboard/gateway" },
    { name: "Masters", path: "/dashboard/masters" },
    { name: "Transactions", path: "/dashboard/transactions" },
    { name: "Reports", path: "/dashboard/reports" },
];

export default function Dashboard({ children }: any) {
    const [index, setIndex] = useState(1);

    useKeyboard({
        ArrowDown: () => setIndex((i) => (i + 1) % menu.length),
        ArrowUp: () => setIndex((i) => (i - 1 + menu.length) % menu.length),
        Enter: () => (window.location.href = menu[index].path),
    });

    return (
        <div className="flex h-screen">
            <div className="w-60 bg-gray-900 text-white p-4 space-y-2">
                <h2 className="text-xl font-bold mb-4">SmartERP</h2>

                {menu.map((m, i) => (
                    <div
                        key={i}
                        className={`p-2 cursor-pointer ${i === index ? "bg-blue-600" : ""
                            }`}
                    >
                        {m.name}
                    </div>
                ))}
            </div>

            <div className="flex-1 p-6 bg-gray-100">{children}</div>
        </div>
    );
}