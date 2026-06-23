"use client";

import { api } from "@/lib/api";
import { useSearchParams } from "next/navigation";
import { useAuthGuard } from "@/hooks/useAuthGuard";

useAuthGuard();

export default function Transactions() {
    const params = useSearchParams();
    const companyId = params.get("company");

    const createSales = async () => {
        await api.post("/voucher/sales", {
            companyId,
            customerLedger: 1,
            salesLedger: 2,
            total: 1000,
            items: [
                { id: 1, qty: 2, price: 500 },
            ],
        });

        alert("Sales voucher created");
    };

    const downloadInvoice = () => {
        window.open(
            `${process.env.NEXT_PUBLIC_API_URL}/invoice/1`,
            "_blank"
        );
    };

    const exportExcel = () => {
        window.open(
            `${process.env.NEXT_PUBLIC_API_URL}/export/ledger?company=${companyId}`
        );
    };

    return (
        <div className="p-10">
            <h1>Transactions</h1>
            <button onClick={createSales}>Create Sales</button>
            <button onClick={downloadInvoice}>Download Invoice</button>
            <button onClick={exportExcel}>Export Excel</button>
        </div>
    );
}