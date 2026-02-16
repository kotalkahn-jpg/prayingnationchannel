"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      setError("Invalid credentials");
      return;
    }

    router.push("/admin/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1E3D]">
      <form
        onSubmit={handleLogin}
        className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-[#0B1E3D]">
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg px-4 py-3 mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg px-4 py-3 mb-6"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-[#D4AF37] text-[#0B1E3D] py-3 rounded-lg font-semibold">
          Login
        </button>

        {error && (
          <p className="text-red-500 text-sm mt-4 text-center">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}
