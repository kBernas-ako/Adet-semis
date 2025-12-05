import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import { Heading1 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col justify-center items-center">

      <h1 className="font-bold italic text-9x1 mb-10">Welcome to my page!</h1>

      <Link href="/login">
        <button className="text-black px-10 py-5 bg-blue-700 text-white rounded-full margin- hover:bg-blue-400 transition"
        >Click to log in</button>
      </Link>

    </div>
  );
}
