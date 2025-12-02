import Link from "next/link";
import Image from 'next/image';
export default function Hobbies () {

    return (
        
        <div className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/ken.png')"}}
        >
            <Link href="/">
                <button className="fixed top-4 left-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-400 transition">
                 Main Page
                </button>
            </Link>
            
            <section className="py-10">
                
                <h1 className="flex justify-center items-center text-5xl font-bold mb-4 text-blue relative"> My Hobbies</h1>
                
                <div className="flex justify-center gap-6 text-center absolute top-3/5 left-1/2 transform -translate-x-1/2 z-20">
                                <Image
                                src="/soc.gif"
                                alt="sucker"
                                width={300}
                                height={200}
                                className="rounded-lg"
                                />
                                <Image
                                src="/game.gif"
                                alt="gaymer"
                                width={300}
                                height={200}
                                className="rounded-lg"
                                />
                                                                        
                </div>
                
                <p className="text-center align leading-relaxed absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  z-10">
                    I enjoy staying active and competitive through playing football (soccer), which helps me build teamwork and discipline. 
                    In my free time, I also enjoy gaming, exploring new virtual worlds, and challenging myself with strategy and problem-solving games.
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