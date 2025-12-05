"use client";
import { getToken } from "@/lib/auth";
import { jwtDecode } from "jwt-decode";
import React from 'react';
import Link from "next/link";

interface JwtPayload {
    sub: number; username: string; role: string; exp: number; iat: number;
}

export default function DashboardHome() {

    const token = getToken();
    let username = 'Guest';

    if (token) {
        try {
            const decoded = jwtDecode<JwtPayload>(token);
            if (decoded.username) {
                username = decoded.username;
            }
        } catch (e) {
            console.error("Token decoding failed:", e);
        }
    }

    return (
        <div className="min-h-screen bg-[steelblue] text-white p-6 flex flex-col">
            <h2 className="text-3xl font-bold mb-2 drop-shadow-lg">Dashboard</h2>
            <h3 className="text-2xl font-semibold mb-2 drop-shadow-lg">Welcome, {username}</h3>

            <div className="flex gap-2 mb-4">
                <Link 
                    href="/home" 
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow"
                >
                    Visit My Page!
                </Link>
            </div>

            {token && (
                <>
                <p className="font-semibold mb-2 drop-shadow-md">Your Bearer Token:</p>
                <pre className="inline-block p-2 bg-white text-black text-xs mt-2 break-all rounded shadow-lg max-w-full">
{token}
                </pre>
                </>
            )}

            <div className="mt-15 flex justify-center">
                <img src="/natoy.png" alt="natoy" className="w-100 rounded shadow-xl" />
            </div>
        </div>
    );
}