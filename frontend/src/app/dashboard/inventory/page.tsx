"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { useSearchParams } from "next/navigation";
import { useAuthGuard } from "@/hooks/useAuthGuard";

useAuthGuard();

export default function Inventory() {
    const [items, setItems] = useState<any[]>([]);
    const params = useSearchParams();
    const companyId = params.get("company");

    useEffect(() => {
        fetchStock();
    }, []);

    const fetchStock = async () => {
        const res = await api.get(`/inventory/${companyId}`);
        setItems(res.data.data);
    };

    return (
        <div>
            <h1 className="text-xl font-bold">Stock Items</h1>

            {items.map((item) => (
                <div key={item.id} className="border p-2">
                    {item.name} - Qty: {item.qty}
                </div>
            ))}
        </div>
    );
}