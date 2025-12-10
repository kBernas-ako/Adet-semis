'use client';
import { useRouter } from "next/navigation";
import { getToken, logoutUser } from "@/lib/auth";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({children}:{
    children: React.ReactNode;
}) {

    const router = useRouter();
    const token = getToken();

    if (!token) {
        router.push('/login');
        return null;
    }

    function handleLogout() {
        logoutUser();
        router.push('/login');
    }
    
    return (
        <div className="bg-[#355C7D]">

            <header className="flex justify-between items-center"> 
                <Button variant="destructive" onClick={handleLogout}>Logout</Button>
            </header>

        {children}
        </div>

    );
}