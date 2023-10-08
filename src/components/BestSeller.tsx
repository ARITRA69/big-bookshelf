import Image from "next/image";
import React from "react";
import { BsBookmark } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";

type Props = {};

const BestSeller = (props: Props) => {
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
  ];

  return (
    <div className="bg-[#2a2c2e]">
      <div className="w-11/12 mx-auto">
        <h2 className="uppercase text-[#f6f4f0] text-3xl py-6">bestseller</h2>
        <div className="grid grid-cols-3 grid-rows-3 gap-3">
          <div className="bg-[#F4CE47] rounded-2xl text-[#f6f4f0] flex justify-center items-center h-full text-4xl">
            SEE ALL
          </div>
          {books.map((book) => (
            <div
              className="flex gap-3 p-3 bg-[#f6f4f0] rounded-2xl"
              key={book.id}
            >
              <div className="w-[40%] h-full flex items-center">
                <Image
                  src={book.image}
                  width={400}
                  height={200}
                  alt=""
                  className=" rounded-2xl"
                />
              </div>
              <div className="w-[60%] flex justify-between">
                <div className="flex flex-col justify-between">

                    {/* Name and author */}
                  <div className="space-y-4">
                    <p className="tracking-wide">{book.author}</p>
                    <p className="text-lg font-semibold">{book.title}</p>
                  </div>

                  {/* Rating and reviews */}
                  <div className="space-y-2">
                    <div className="p-2 border-2 border-[#2a2c2e] w-max flex items-center gap-3 rounded-3xl">
                      <span>{book.comments}</span>
                      <BiComment />
                    </div>
                    <div className="p-2 border-2 border-[#2a2c2e] w-max flex items-center gap-3 rounded-3xl">
                        <span>{book.stars}</span>
                        <AiOutlineStar />
                        <span>({book.reviews})</span>
                    </div>
                  </div>

                    {/* price */}
                  <div></div>
                </div>
                <div className="rounded-full p-2 bg-[#2a2c2e] text-[#f6f4f0] h-12 w-12  flex justify-center items-center">
                  <BsBookmark />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
