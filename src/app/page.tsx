import BestSeller from "@/components/BestSeller";
import Hero from "@/components/Hero";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

const Satoshi = localFont({ src: "../../public/fonts/Satoshi-Black.ttf" });

export default function Home() {
  return (
    <main className="min-h-screen mt-6">
      <div className="w-11/12 mx-auto gap-6 py-6">
        <h1
          className="uppercase text-center text-3xl sm:text-7xl font-extrabold text-[#2a2c2e]"
          style={Satoshi.style}
        >
          reading makes the world huge
        </h1>
        <Hero />
      </div>
      {/* <BestSeller /> */}
    </main>
  );
}
