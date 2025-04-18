"use client";
import { Book } from "@/type/Book";
import { Star } from "lucide-react";
import { Button } from "./ui/button";
import BookCover from "./BookCover";
import Image from "next/image";

const BookOverview = ({ props }: { props: Book }) => {
  console.log("Shadow cover image URL:", props.cover);
  return (
    <section className="flex">
      {/*  */}
      <div className="flex flex-col ">
        <h1 className="text-4xl">{props.title}</h1>
        <div className="flex flex-col gap-2 pt-10  px-8 ">
          <div className="flex gap-5">
            <span>By </span> <p>{props.author}</p>
            <span>Category </span> <p>{props.genre}</p>
          </div>
          <div className="flex gap-2">
            <p>
              {" "}
              <Star size={20} />
            </p>
            <p>{props.rating}</p>
          </div>
          <div className="flex gap-2">
            <p>
              {" "}
              <span>Total Books</span> {props.total_copies}
            </p>
            <p>
              <span>Available Books</span> {props.available_copies}
            </p>
          </div>
          <div>
            <p>{props.description}</p>
          </div>
          <Button>Borrow</Button>

          <h3 className="font-extrabold ">Popular books</h3>
        </div>
      </div>
      {/* BookCover */}
      <div className="flex flex-1 flex-col gap-5">
        <div className="relative flex flex-1 justify-center h-[30%] w-[50%]">
          <div className="relative">
            <BookCover
              variant="wide"
              className="z-10"
              coverImage={props.cover}
              coverColor={props.color}
            />
            <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
              <BookCover
                variant="wide"
                className="z-10"
                coverImage={props.cover}
                coverColor={props.color}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BookOverview;
