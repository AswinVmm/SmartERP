"use client";

import { useState } from "react";
import { api } from "@/lib/api";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        try {
            await api.post("/auth/login", { email, password });
            window.location.href = "/companies";
        } catch (err: any) {
            alert(err.response?.data?.message);
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow w-96 space-y-4">
                <h1 className="text-2xl font-bold text-center">SmartERP Login</h1>

                <input
                    className="w-full border p-2 rounded"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className="w-full border p-2 rounded"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    onClick={login}
                    className="w-full bg-blue-600 text-white p-2 rounded"
                >
                    Login
                </button>

                <p className="text-sm text-center">
                    No account? <a href="/signup" className="text-blue-500">Signup</a>
                </p>
            </div>
        </div>
    );
}