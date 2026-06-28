"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { useKeyboard } from "@/hooks/useKeyboard";
import { getCompany } from "@/lib/company";

export default function Inventory() {
    const [items, setItems] = useState<any[]>([]);
    const [index, setIndex] = useState(0);
    const [companyId, setCompanyId] = useState<string | null>(null);

    useEffect(() => {
        const id = getCompany();
        setCompanyId(id);
    }, []);

    useEffect(() => {
        if (companyId) {
            fetchStock(companyId);
        }
    }, [companyId]);

    const fetchStock = async (companyId: string) => {
        const res = await api.get(`api/inventory/${companyId}`);
        setItems(res.data.data || []); // 🛑 important fix
    };

    const createItem = async () => {
        const name = prompt("Item Name");
        const price = prompt("Selling Price");

        if (!name || !companyId) return;

        await api.post("api/inventory/item", {
            name,
            selling_price: price,
            company_id: companyId,
        });

        fetchStock(companyId);
    };

    const deleteItem = async () => {
        const item = items[index];
        if (!item) return;

        if (!confirm("Delete item?")) return;

        await api.delete(`api/inventory/item/${item.id}`);
        fetchStock(companyId!);
    };

    useKeyboard({
        ArrowDown: () =>
            setIndex((i) => (items.length ? (i + 1) % items.length : 0)),
        ArrowUp: () =>
            setIndex((i) =>
                items.length ? (i - 1 + items.length) % items.length : 0
            ),
        "Alt+c": createItem,
        Delete: deleteItem,
    });

    return (
        <div className="h-screen bg-black text-green-400 p-6 font-mono">
            <h1 className="text-xl mb-4">Stock Items</h1>

            {items.length === 0 ? (
                <p>No items found</p>
            ) : (
                items.map((item, i) => (
                    <div
                        key={item.id}
                        className={`p-2 flex justify-between ${i === index ? "bg-green-400 text-black" : ""
                            }`}
                    >
                        <span>{item.name}</span>
                        <span>Qty: {item.qty}</span>
                    </div>
                ))
            )}

            <div className="mt-6 text-sm">
                Alt+C Create | Del Delete
            </div>
        </div>
    );
}