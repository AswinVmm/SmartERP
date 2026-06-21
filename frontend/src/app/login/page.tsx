"use client";

import axios from "axios";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        await axios.post("/api/auth/login", { email, password });
        window.location.href = "/companies";
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="space-y-4">
                <input onChange={(e) => setEmail(e.target.value)} />
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={login}>Login</button>
            </div>
        </div>
    );
}