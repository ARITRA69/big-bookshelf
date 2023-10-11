import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Image from "next/image";
import Link from "next/link";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Menu</Button>
      </SheetTrigger>
      <SheetContent className="w-11/12 h-max mx-auto mt-28 rounded-xl bg-[#2A2C2E] flex flex-col">
        <div className="mt-10 flex justify-between items-center  gap-3 w-11/12 mx-auto">
          <Button className="bg-yellow-500 flex justify-evenly items-center py-8 rounded-md hover:scale-110 duration-150 ease-in">
            <Image
              src="/Search.png"
              alt="search"
              width={50}
              height={50}
              className="w-8 h-8"
            />
          </Button>

          <Button className="bg-yellow-500 flex justify-evenly items-center py-8 rounded-md hover:scale-110 duration-150 ease-in">
            <Image
              src="/book.png"
              alt="search"
              width={50}
              height={50}
              className="w-8 h-8"
            />
          </Button>

          <Button className="bg-yellow-500 flex justify-evenly items-center py-8 rounded-md hover:scale-110 duration-150 ease-in">
            <Image
              src="/Vector.png"
              alt="search"
              width={50}
              height={50}
              className="w-8 h-8"
            />
          </Button>
        </div>

        <div className="mt-10 flex flex-col items-center gap-y-12 text-white font-roboto text-2xl font-medium">
          <Link href="../../app/books/page.tsx">BOOKS</Link>
          <Link href="../../app/authors/page.tsx">AUTHORS</Link>
          <Link href="../../app/what-to-read/page.tsx">WHAT TO READ?</Link>
          <Link href="../../app/gift-ideas/page.tsx">GIFT IDEAS</Link>
          <Link href="../../app/about-us/page.tsx">ABOUT US</Link>
        </div>

        <SheetFooter>
          <div className="flex justify-center items-center text-white mt-32">
            COPY RIGHT 2023 &nbsp; 
            <span className="text-yellow-500">@BIG BOOKSHELF</span>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
