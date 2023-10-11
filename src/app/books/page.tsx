"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import localFont from "next/font/local";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

type Props = {};

const DmSans = localFont({
  src: "../../../public/fonts/DMSans_18pt-Light.ttf",
});

const Books = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const shortLists = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];

  const books = [
    {
      id: 1,
      image: "https://images.template.net/717/Fantasy-Book-Cover-Template.jpg",
      title: "The Tree of Life",
      comments: "50",
      stars: "4.9",
      reviews: "80",
      author: "Linda Lennon",
      price: "$15.50",
      discountedPrice: "$10.50",
    },
    {
      id: 2,
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1425931258i/25107311.jpg",
      title: "The Tree",
      comments: "78",
      stars: "4.7",
      reviews: "85",
      author: "Denise Mallett",
      discountedPrice: "$14.50",
    },
    {
      id: 3,
      image:
        "https://www.creativeparamita.com/wp-content/uploads/2023/02/the-sacred-tree.jpg",
      title: "The Sacred Tree",
      comments: "29",
      stars: "4.9",
      reviews: "76",
      author: "Linda Lennon",
      price: "$19.50",
      discountedPrice: "$15.00",
    },
    {
      id: 4,
      image:
        "https://api.entangledpublishing.com/storage/books/book_16824428066641.jpg",
      title: "Sanctuary of the Shadow",
      comments: "34",
      stars: "4.0",
      reviews: "15",
      author: "Aurora Ascher",
      price: "$15.50",
      discountedPrice: "$10.50",
    },
    {
      id: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1339533695i/10194157.jpg",
      title: "Shadow and Bone",
      comments: "44",
      stars: "4.1",
      reviews: "102",
      author: "Leign Bardvgo",
      discountedPrice: "$20.50",
    },
    {
      id: 6,
      image:
        "https://www.orbitbooks.net/wp-content/uploads/2021/03/Caruso_QuicksilverCourt-TP-scaled.jpg",
      title: "Quick Silver Court",
      comments: "13",
      stars: "4.5",
      reviews: "81",
      author: "Melissa Caruso",
      discountedPrice: "$9.50",
    },
    {
      id: 7,
      image:
        "https://static-cse.canva.com/blob/142538/Purple-and-Red-Leaves-Illustration-Childrens-Book-Cover.jpg",
      title: "Amara The Brave",
      comments: "10",
      stars: "4.4",
      reviews: "65",
      author: "Matt Zhang",
      discountedPrice: "$19.50",
    },
    {
      id: 8,
      image:
        "https://www.theartworksinc.com/wp-content/uploads/2021/03/thumbnail_nncogbgjmoncngek.jpg",
      title: "Strong as Fire Fierce as Flame",
      comments: "25",
      stars: "4.3",
      reviews: "71",
      author: "Supriya Kelkar",
      discountedPrice: "$20.50",
    },
    {
      id: 9,
      image:
        "https://www.ingramspark.com/hs-fs/hubfs/TheSumofAllThings_cover_June21_option4(1).jpg?width=1125&name=TheSumofAllThings_cover_June21_option4(1).jpg",
      title: "The Sum of All Things",
      comments: "22",
      stars: "4.1",
      reviews: "79",
      author: "Nicole Brooks",
      discountedPrice: "$15.50",
    },
  ];

  return (
    <main className="min-h-screen mt-8">
      <h1 className="py-3 uppercase text-center text-xl sm:text-5xl bg-[#f4ce47] flex items-center justify-around font-thin mb-3">
        <span className="text-[#f4ba30] hidden lg:inline-block">all books</span>
        <span className="text-[#f4ba30]">all books</span>
        <span className="text-[#2a2c2e]">all books</span>
        <span className="text-[#f4ba30]">all books</span>
        <span className="text-[#f4ba30] hidden lg:inline-block">all books</span>
      </h1>
      <section className="bg-[#2a2c2e] py-6">
        <div className="w-11/12 mx-auto">
          <div className="flex justify-between text-[#f6f4f0] pb-6">
            <div className="text-xl flex items-center">FILTER</div>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild className="bg-transparent">
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[200px] justify-between"
                >
                  {value
                    ? shortLists.find(
                        (shortLists) => shortLists.value === value
                      )?.label
                    : "Select"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search" className="h-9" />
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandGroup>
                    {shortLists.map((shortList) => (
                      <CommandItem
                        key={shortList.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                      >
                        {shortList.label}
                        <CheckIcon
                          className={cn(
                            "ml-auto h-4 w-4",
                            value === shortList.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          <div className="">
            <div className="grid grid-cols-4 gap-6 mx-auto" style={DmSans.style}>
              {/* Filter */}
              <div className="bg-[#f6f4f0] rounded-2xl p-3 row-span-3 space-y-6">
                <div>
                  <h4 className="uppercase text-xl font-bold tracking-wider">
                    genre
                  </h4>
                  <input
                    className="bg-[#e2e2e2] border-none uppercase py-4 px-2 focus:outline-none my-3 w-full rounded-xl"
                    placeholder="FIND GENRE"
                  />
                </div>
                <div>
                  <h4 className="uppercase text-xl font-bold tracking-wider">
                    publish date
                  </h4>
                  <Select>
                    <SelectTrigger className="w-full bg-[#e2e2e2] py-4 px-2 my-3 rounded-xl">
                      <SelectValue placeholder="Select Publish Date" />
                    </SelectTrigger>
                    <SelectContent className="uppercase">
                      <SelectGroup>
                        <SelectItem value="this-week">This Week</SelectItem>
                        <SelectItem value="this-month">This Month</SelectItem>
                        <SelectItem value="this-year">This Year</SelectItem>
                        <SelectItem value="all-years">All Years</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {books.map((book) => (
                <div className="bg-[#f6f4f0] rounded-2xl p-5" key={book.id}>
                  <Image
                    src={book.image}
                    height={400}
                    width={310}
                    alt=""
                    className="rounded-2xl mb-2 h-[400px] 3xl:h-[600px] w-full"
                  />
                  <div className="space-y-2 lg:space-y-2 mb-2">
                    <p className="tracking-wide">{book.author}</p>
                    <p className="text-lg lg:text-xl font-semibold">
                      {book.title}
                    </p>
                  </div>

                  {/* Rating and reviews */}
                  <div className="text-xs md:text-md flex gap-3">
                    <div className="p-1 lg:p-2 border lg:border-2 border-[#2a2c2e] w-max flex items-center gap-3 rounded-3xl">
                      <span>{book.comments}</span>
                      <BiComment />
                    </div>
                    <div className="p-1 lg:p-2 border lg:border-2 border-[#2a2c2e] w-max flex items-center gap-1  sm:gap-3 rounded-3xl">
                      <span>{book.stars}</span>
                      <AiOutlineStar />
                      <span>({book.reviews})</span>
                    </div>
                  </div>

                  {/* price */}
                  <div className="flex items-center justify-between w-full">
                    <span className="text-lg md:text-xl lg:text-2xl">
                      {book.discountedPrice}
                    </span>
                    <button className="rounded-full p-2 bg-[#2a2c2e] text-[#f6f4f0] h-12 w-12  flex justify-center items-center hover:invert duration-300">
                      <BsBookmark />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Books;
