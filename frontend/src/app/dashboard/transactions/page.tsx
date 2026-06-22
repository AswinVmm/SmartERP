"use client";

import { api } from "@/lib/api";
import { useSearchParams } from "next/navigation";

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

    return (
        <div className="p-10">
            <h1>Transactions</h1>

            <button onClick={createSales}>Create Sales</button>
        </div>
    );
}