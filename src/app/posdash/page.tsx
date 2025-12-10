'use client';

import React, { useEffect, useState } from 'react';
import { getToken, logoutUser } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { API_BASE } from '@/lib/config';
import Link from "next/link";

interface Position {
    position_id?: number;
    position_code: string;
    position_name: string;
}

export default function DashboardPage() {
    const router = useRouter();
    const [positions, setPositions] = useState<Position[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [positionCode, setPositionCode] = useState('');
    const [positionName, setPositionName] = useState('');
    const [editingId, setEditingId] = useState<number | null>(null);

    useEffect(() => {
        const token = getToken();
        if (!token) {
            router.push('/login');
            return;
        }
        fetchPositions();
    }, []);

    function authHeaders() {
        const token = getToken();
        return {
            'Content-Type': 'application/json',
            Authorization: token ? `Bearer ${token}` : '',
        };
    }

    async function fetchPositions() {
        setLoading(true);
        setError(null);

        try {
            const res = await fetch(`${API_BASE}/positions`, {
                method: 'GET',
                headers: authHeaders(),
            });

            if (res.status === 401) {
                logoutUser();
                router.push('/login');
                return;
            }

            if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);

            const data = await res.json();
            setPositions(data);
        } catch (e: any) {
            setError(e?.message || 'Failed to fetch positions');
        } finally {
            setLoading(false);
        }
    }

    async function handleCreateOrUpdate(e: React.FormEvent) {
        e.preventDefault();
        setError(null);

        const payload: Position = {
            position_code: positionCode,
            position_name: positionName,
        };

        try {
            let res: Response;

            if (editingId) {
                res = await fetch(`${API_BASE}/positions/${editingId}`, {
                    method: 'PUT',
                    headers: authHeaders(),
                    body: JSON.stringify(payload),
                });
            } else {
                res = await fetch(`${API_BASE}/positions`, {
                    method: 'POST',
                    headers: authHeaders(),
                    body: JSON.stringify(payload),
                });
            }

            if (res.status === 401) {
                logoutUser();
                router.push('/login');
                return;
            }

            if (!res.ok) {
                const err = await res.json().catch(() => ({}));
                throw new Error(err?.message || `Request failed: ${res.status}`);
            }

            setPositionCode('');
            setPositionName('');
            setEditingId(null);
            await fetchPositions();
        } catch (e: any) {
            setError(e?.message || 'Save failed');
        }
    }

    function startEdit(p: Position) {
        setEditingId(p.position_id ?? null);
        setPositionCode(p.position_code);
        setPositionName(p.position_name);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    async function handleDelete(id?: number) {
        if (!id) return;
        if (!confirm('Delete this position?')) return;

        setError(null);

        try {
            const res = await fetch(`${API_BASE}/positions/${id}`, {
                method: 'DELETE',
                headers: authHeaders(),
            });

            if (res.status === 401) {
                logoutUser();
                router.push('/login');
                return;
            }

            if (!res.ok) throw new Error(`Delete failed: ${res.status}`);

            await fetchPositions();
        } catch (e: any) {
            setError(e?.message || 'Delete failed');
        }
    }

    function handleCancelEdit() {
        setEditingId(null);
        setPositionCode('');
        setPositionName('');
    }

    function handleLogout() {
        logoutUser();
        router.push('/login');
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#355C7D] to-[#6C5B7B] to-[#C06C84] text-black p-6 flex flex-col">
            <Link href="/dashboard">
                <button className="fixed top-4 left-4 px-4 py-2 bg-[black] text-white rounded hover:bg-[gray] transition">
                 Back
                </button>
                 </Link>
            <div className="max-w-4xl mx-auto">
        
                <header className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold italic text-white">Users Position Dashboard</h1>
                    <div className="flex items-center gap-3">
                        <Button variant="outline" onClick={() => fetchPositions()}>Refresh</Button>
                        <Button variant="destructive" onClick={handleLogout}>Logout</Button>
                    </div>
                </header>

                <Card className="mb-6">
                    <CardContent>
                        <h2 className="text-lg font-semibold mb-2">
                            {editingId ? 'Edit Position' : 'Create Position'}
                        </h2>

                        <form
                            onSubmit={handleCreateOrUpdate}
                            className="grid grid-cols-1 md:grid-cols-3 gap-3"
                        >
                            <Input
                                placeholder="Position Code"
                                value={positionCode}
                                onChange={(e) => setPositionCode(e.target.value)}
                                required
                            />

                            <Input
                                placeholder="Position Name"
                                value={positionName}
                                onChange={(e) => setPositionName(e.target.value)}
                                required
                            />

                            <div className="flex gap-2">
                                <Button type="submit">
                                    {editingId ? 'Update' : 'Create'}
                                </Button>

                                {editingId && (
                                    <Button variant="outline" onClick={handleCancelEdit}>Cancel</Button>
                                )}
                            </div>
                        </form>
                    </CardContent>
                </Card>

                <section>
                    <h2 className="text-lg text-white font-semibold mb-2">
                        Users List {loading && '(loading...)'}
                    </h2>

                    <div className="overflow-x-auto bg-white rounded shadow">
                        <table className="w-full text-left">
                            <thead className="bg-slate-100">
                                <tr>
                                    <th className="px-4 py-2">ID</th>
                                    <th className="px-4 py-2">Code</th>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {positions.length === 0 && !loading && (
                                    <tr>
                                        <td
                                            colSpan={4}
                                            className="px-4 py-6 text-center text-sm text-slate-500"
                                        >
                                            No User found.
                                        </td>
                                    </tr>
                                )}

                                {positions.map((p) => (
                                    <tr key={p.position_id} className="border-t">
                                        <td className="px-4 py-2 align-top">{p.position_id}</td>
                                        <td className="px-4 py-2 align-top">{p.position_code}</td>
                                        <td className="px-4 py-2 align-top">{p.position_name}</td>
                                        <td className="px-4 py-2 align-top">
                                            <div className="flex gap-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => startEdit(p)}
                                                >
                                                    Edit
                                                </Button>

                                                <Button
                                                    variant="destructive"
                                                    size="sm"
                                                    onClick={() => handleDelete(p.position_id)}
                                                >
                                                    Delete
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

            </div>
        </div>
    );
}
