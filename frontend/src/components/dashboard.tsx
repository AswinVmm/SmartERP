"use client";

export default function Dashboard({ children }: any) {
    return (
        <div className="flex h-screen">
            <div className="w-60 bg-gray-900 text-white p-4 space-y-4">
                <h2 className="text-xl font-bold">SmartERP</h2>

                <a href="/companies">Companies</a>
                <a href="/dashboard/gateway">Gateway</a>
                <a href="/dashboard/masters">Masters</a>
                <a href="/dashboard/transactions">Transactions</a>
                <a href="/dashboard/reports">Reports</a>
            </div>

            <div className="flex-1 p-6 bg-gray-100">{children}</div>
        </div>
    );
}