import Link from "next/link";
import Image from 'next/image';

export default function Education() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/ken.png')" }}
    >
        
        <Link href="/">
                <button className="fixed top-4 left-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-400 transition">
                 Main Page
                </button>
            </Link>

      <section className="py-10">
        <h1 className="flex justify-center items-center text-5xl font-bold mb-4 gap-6 text-black">
          Education

        </h1> {/*text-center absolute top-3/5 left-1/2 transform -translate-x-1/2 z-20*/}
            
            <div className="flex justify-center gap-6 text-center absolute top-3/5 left-1/2 transform -translate-x-1/2 z-20">
                <Image
                src="/nps.png"
                alt="Education Image 1"
                width={200}
                height={200}
                className="rounded-lg"
                />
                <Image
                src="/unc.png"
                alt="Education Image 2"
                width={200}
                height={200}
                className="rounded-lg"
                />
                <Image
                src="/ncf.png"
                alt="Education Image 3"
                width={200}
                height={200}
                className="rounded-lg"
                />
                        
            </div>

        <p className="text-center leading-relaxed absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 px-4">
          I completed elementary education at Naga Parochial School in 2017, High School at the University of Nueva Caceres in 2021, and Senior high School at Naga College Foundation in 2023. 
          I am currently pursuing a college degree in Information Technology at Naga College Foundation.
        </p>
      </section>

      <section className="py-10">
        <div className="flex justify-center items-center gap-6 mb-10">
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
  );
}
