"use client";

import { useState } from "react";
import { api } from "@/lib/api";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = async () => {
        await api.post("api/auth/register", { email, password });
        window.location.href = "/login";
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow w-96 space-y-4">
                <h1 className="text-2xl font-bold text-center">Create Account</h1>

                <input className="border p-2 w-full" placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)} />

                <input className="border p-2 w-full" type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} />

                <button onClick={register}
                    className="bg-green-600 text-white w-full p-2 rounded">
                    Signup
                </button>
            </div>
        </div>
    );
}