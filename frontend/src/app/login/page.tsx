"use client";

import { useState } from "react";
import { api } from "@/lib/api";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        try {
            await api.post("/auth/login", { email, password });

            // cookie is set by backend
            window.location.href = "/companies";
        } catch (err: any) {
            alert(err.response?.data?.message);
        }
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="space-y-4">
                <input
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={login}>Login</button>
            </div>
        </div>
    );
}