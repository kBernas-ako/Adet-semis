"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { API_BASE } from "@/lib/config";
import { FormEvent } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleRegister(e: FormEvent) {
    e.preventDefault();
    setError("");

    const res = await fetch(`${API_BASE}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      setError(data.message || "Register Failed");
      return;
    }

    router.push("/login");
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b from-[#355C7D] to-[#6C5B7B] to-[#C06C84] p-4">
      
      <button
        onClick={() => router.push("/login")}
        className="absolute top-4 left-4 text-white text-center bg-blue-900 hover:bg-blue-950 px-3 py-1 rounded shadow"
      >
        Back to Login
      </button>

      <Card className="w-full max-w-sm p-6 shadow-xl rounded-2xl bg-white/90 backdrop-blur-sm border border-blue-200">
        <CardContent>
          <h1 className="text-2xl font-bold mb-4 text-center text-blue-900">Register</h1>

          <form onSubmit={handleRegister} className="space-y-4">
            <Input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border-blue-300 focus:border-blue-600 focus:ring-blue-600"
            />

            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-blue-300 focus:border-blue-600 focus:ring-blue-600"
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button
              className="w-full bg-blue-700 hover:bg-blue-800 text-white shadow-md"
              type="submit"
            >
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}