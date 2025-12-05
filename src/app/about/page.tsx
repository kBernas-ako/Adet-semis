import Link from "next/link";
import Image from "next/image";
export default function About () {

    return (
        <div className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/ken.png')"}}
        >

            <Link href="/dashboard">
                <button className="fixed top-4 left-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-400 transition">
                 Back
                </button>
            </Link>

            <section className="py-10">
                
                <h1 className="flex justify-center items-center text-5xl font-bold mb-4 text-black">About Me</h1>
                
                <Image
                    src="/pfp.png"
                    alt="Profile Picture"
                    width={280}
                    height={280}    
                    className="text-center absolute top-3/5 left-1/2 transform -translate-x-1/2 z-20 "
                    />

                <p className="text-center align leading-relaxed absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 ">
                   A college student pursuing Information Technology at Naga College Foundation (NCF) is learning in a dynamic field at an institution guided by Quality, Excellence, Service, and Truth (QuEST). 
                   At the "Home of the Champions," students gain technical knowledge and practical skills in programming, networking, information management, and emerging technologies. Beyond the classroom, NCF fosters a vibrant community, preparing students to be globally competent, socially responsible, and ready to "Leap into the Future."
                </p>
            </section>

                <section className="py-10">
                    <div className="flex justify-center items-center gap-6 mb-10 ">
                        <Link href="/home">
            <button className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-400 transition">
            Home
            </button>
          </Link>
          
          <Link href="/about">
            <button className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-400 transition">
              About me
            </button>
          </Link>

          <Link href="/education">
            <button className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-400 transition">
              Education
            </button>
          </Link>

          <Link href="/hobbies">
            <button className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-400 transition">
              Hobbies
            </button>
          </Link>

          <Link href="/contact">
            <button className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-400 transition">
              Contact
            </button>
          </Link>

                    </div>
                </section>
        </div>
    )
}
