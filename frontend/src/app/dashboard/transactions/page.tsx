"use client";

import { api } from "@/lib/api";
import { useSearchParams } from "next/navigation";
import { useKeyboard } from "@/hooks/useKeyboard";

export default function Transactions() {
    const params = useSearchParams();
    const companyId = params.get("company");

    const createSales = async () => {
        await api.post("/voucher/sales", {
            companyId,
            customerLedger: 1,
            salesLedger: 2,
            total: 1000,
            items: [{ id: 1, qty: 2, price: 500 }],
        });

        alert("Sales Voucher Created");
    };

    const createPurchase = async () => {
        await api.post("/voucher/purchase", {
            companyId,
            supplierLedger: 3,
            purchaseLedger: 4,
            total: 800,
            items: [{ id: 1, qty: 4, price: 200 }],
        });

        alert("Purchase Voucher Created");
    };

    const downloadInvoice = () => {
        window.open(
            `${process.env.NEXT_PUBLIC_API_URL}/api/invoice/1`,
            "_blank"
        );
    };

    const exportExcel = () => {
        window.open(
            `${process.env.NEXT_PUBLIC_API_URL}/api/export/ledger?company=${companyId}`
        );
    };

    // 🎹 Keyboard shortcuts (Tally style)
    useKeyboard({
        "Alt+s": createSales,
        "Alt+p": createPurchase,
        "Alt+i": downloadInvoice,
        "Alt+e": exportExcel,
    });

    return (
        <div className="h-screen bg-black text-green-400 p-10 font-mono">
            <h1 className="text-2xl mb-6">Transactions</h1>

            <div className="space-y-3">
                <button onClick={createSales}>Alt+S Sales Voucher</button>
                <button onClick={createPurchase}>Alt+P Purchase Voucher</button>
                <button onClick={downloadInvoice}>Alt+I Invoice</button>
                <button onClick={exportExcel}>Alt+E Export</button>
            </div>

            <p className="mt-10 text-sm">
                Alt+S Sales | Alt+P Purchase | Alt+I Invoice | Alt+E Export
            </p>
        </div>
    );
}