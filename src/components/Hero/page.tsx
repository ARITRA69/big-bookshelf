import Image from "next/image";
import React from "react";
import "./style.css"

const Page = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:gap-4 mt-6 justify-between ">
        <div className="lg:h-[50vh] bg-[#2a2c2e] w-full rounded-2xl text-[#f6f4f0] flex flex-col justify-between p-4 relative">

          <div className="lg:flex lg:flex-row flex-col justify-between gap-4  relative ">
            <div className="flex flex-col gap-4">
              <h1 className="uppercase text-[36px]">find something to read</h1>
              <p className="leading-loose">
                Fancy something unusual and unpredictable? Funny or exciting?
                <br />
                No problem. Check out the collections we have prepared for you.
              </p>
            </div>
            <br />
            <Image
              src="/hero.png"
              width={300}
              height={300}
              alt=""
              className="object-cover rounded-2xl flex items-center justify-center"
            />
          </div>

          <br className=""/>
          <button className="border border-[#f4ce47] text-[#f4ce47] uppercase py-3 px-4 rounded-xl w-max bottom-4 coolBeans font-medium">
            browse now
          </button>
        </div>

        <div className="h-[50vh] bg-[#f5e5c4]  text-[#2a2c2e] flex flex-col justify-center items-center gap-y-2 rounded-2xl">
          <span className="text-[35px] font-extrabold">
            Book of The Day
          </span>
          <div className="">
          <Image
            src="/hero.png"
            width={500}
            height={500}
            alt=""
            // className="object-fill rounded-2xl bg-black hover:"
            className=" object-cover transition-transform duration-300 transform scale-100 hover:scale-105 filter hover:brightness-50"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
