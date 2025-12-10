"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { saveToken } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { API_BASE } from "@/lib/config";
import { FormEvent } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setError("");

    const res = await fetch(`${API_BASE}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      setError(data.message || "Login failed");
      return;
    }

    saveToken(data.accessToken);
    router.push("/dashboard");
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b from-[#355C7D] to-[#6C5B7B] to-[#C06C84] p-4">
      
      <button
        onClick={() => router.push("/")}
        className="absolute top-4 left-4 text-white bg-blue-900 hover:bg-blue-950 px-3 py-1 rounded shadow"
      >
        Back
      </button>

      <Card className="w-full max-w-sm p-6 shadow-xl rounded-2xl bg-white/90 backdrop-blur-sm border border-blue-200">
        <CardContent>
          <h1 className="text-2xl font-bold mb-4 text-center text-blue-900">Login</h1>

          <form onSubmit={handleLogin} className="space-y-4">
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
              Login
            </Button>
          </form>

          <Button
            variant="link"
            className="mt-2 w-full text-blue-900 hover:text-blue-700"
            onClick={() => router.push("/register")}
          >
            Create an Account
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}