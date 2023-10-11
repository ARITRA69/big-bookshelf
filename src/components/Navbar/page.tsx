import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import { SheetDemo } from "./Menu";

const navLinks = [
  {
    id: 1,
    title: "Books",
    link: "/books",
  },
  {
    id: 2,
    title: "Authors",
    link: "/authors",
  },
  {
    id: 3,
    title: "What to Read?",
    link: "/what-to-read",
  },
  {
    id: 4,
    title: "Gift Ideas",
    link: "/gift-ideas",
  },
  {
    id: 5,
    title: "About Us",
    link: "/about-us",
  },
];

const Navbar = () => {
  return (
    <div className="bg-[#2a2c2e] text-[#f6f4f0] px-4 py-4 w-11/12 mx-auto translate-y-4 rounded-xl flex justify-between">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/Logo.svg" width={30} height={30} alt="" />
        <span className="uppercase font-semibold text-lg hidden sm:block">
          big bookshelf
        </span>
      </Link>
      <div className="sm:flex sm:items-center hidden gap-6">
        {navLinks.map((navLink) => (
          <Link href={navLink.link} key={navLink.id}>
            {navLink.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-10">
        <div className="sm:flex sm:items-center hidden gap-6">
          <FiSearch />
          <BsBookmark />
          <AiOutlineShopping />
        </div>
        <Link
          href="https://www.youtube.com/watch?v=vu4SPYmnWzg"
          className="uppercase py-3 px-4 bg-[#F4CE47] text-[#2a2c2e] rounded-lg invisible sm:visible"
        >
          login
        </Link>

        <div className="uppercase bg-[#F4CE47] text-[#2a2c2e] rounded-lg sm:invisible visible">
          <SheetDemo />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
