"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export default function Companies() {
    const [companies, setCompanies] = useState<any[]>([]);
    const [form, setForm] = useState<any>({});
    const [editing, setEditing] = useState<any>(null);

    useEffect(() => {
        fetchCompanies();
    }, []);

    const fetchCompanies = async () => {
        const res = await api.get("/company");
        setCompanies(res.data.data);
    };

    const saveCompany = async () => {
        if (editing) {
            await api.put(`/company/${editing.id}`, form);
        } else {
            await api.post("/company", form);
        }
        setForm({});
        setEditing(null);
        fetchCompanies();
    };

    const editCompany = (c: any) => {
        setEditing(c);
        setForm(c);
    };

    const deleteCompany = async (id: string) => {
        if (!confirm("Delete company?")) return;
        await api.delete(`/company/${id}`);
        fetchCompanies();
    };

    const selectCompany = (id: string) => {
        localStorage.setItem("companyId", id);
        window.location.href = "/dashboard/gateway";
    };

    return (
        <div className="p-10 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Select Company</h1>

            {/* FORM */}
            <div className="bg-white p-6 rounded shadow mb-6 grid grid-cols-2 gap-4">
                <input placeholder="Company Name"
                    value={form.name || ""}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                />

                <input placeholder="GST Number"
                    value={form.gst || ""}
                    onChange={e => setForm({ ...form, gst: e.target.value })}
                />

                <input placeholder="State"
                    value={form.state || ""}
                    onChange={e => setForm({ ...form, state: e.target.value })}
                />

                <input placeholder="Contact"
                    value={form.contact || ""}
                    onChange={e => setForm({ ...form, contact: e.target.value })}
                />

                <input placeholder="Email"
                    value={form.email || ""}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                />

                <input placeholder="Address"
                    value={form.address || ""}
                    onChange={e => setForm({ ...form, address: e.target.value })}
                />

                <button
                    onClick={saveCompany}
                    className="col-span-2 bg-blue-600 text-white p-2 rounded"
                >
                    {editing ? "Update Company" : "Create Company"}
                </button>
            </div>

            {/* COMPANY LIST */}
            <div className="grid grid-cols-3 gap-4">
                {companies.map((c) => (
                    <div key={c.id} className="bg-white p-4 rounded shadow">
                        <h2 className="font-bold">{c.name}</h2>
                        <p className="text-sm text-gray-500">{c.state}</p>

                        <div className="flex gap-2 mt-4">
                            <button onClick={() => selectCompany(c.id)} className="bg-green-600 text-white px-3 py-1 rounded">
                                Select
                            </button>

                            <button onClick={() => editCompany(c)} className="bg-yellow-500 text-white px-3 py-1 rounded">
                                Alter
                            </button>

                            <button onClick={() => deleteCompany(c.id)} className="bg-red-600 text-white px-3 py-1 rounded">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}