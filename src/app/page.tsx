import BestSeller from "@/components/BestSeller";
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 justify-between ">
          <div className="h-[50vh] bg-[#2a2c2e] w-full rounded-2xl text-[#f6f4f0] flex flex-col justify-between p-4 relative">
            <div className="lg:flex lg:flex-row flex-col justify-between gap-2 relative">
              <div className="flex flex-col gap-4">
                <h1 className="uppercase text-[36px]">
                  find something to read
                </h1>
                <p>
                  Fancy something unusual and unpredictable? Funny or exciting?
                  <br />
                  No problem. Check out the collections we have prepared for
                  you.
                </p>
              </div>
              <Image
              src="/hero.png"
              width={300}
              height={300}
              alt=""
              className="object-cover rounded-2xl"
            />
            </div>
            <button className="border border-[#f4ce47] text-[#f4ce47] uppercase py-3 px-4 rounded-xl w-max absolute
             bottom-4">
              browse now
            </button>
          </div>
          <div className="h-[50vh] bg-[#f5e5c4] w-full rounded-2xl text-[#2a2c2e] flex justify-center items-center">
            <Image
              src="/hero.png"
              width={500}
              height={500}
              alt=""
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <BestSeller />
    </main>
  );
}
