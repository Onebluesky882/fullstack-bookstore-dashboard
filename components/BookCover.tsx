import { cn } from "@/lib/utils";

import BookCoverSvg from "./BookCoverSvg";
import Image from "next/image";

type Props = {
  className: string;
  variant?: BookCoverVariant;
  coverColor: string;
  coverImage: string;
};

type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<BookCoverVariant, string> = {
  extraSmall: "w-[60px] h-[90px]",
  small: "w-[80px] h-[120px]",
  medium: "w-[120px] h-[180px]",
  regular: "w-[160px] h-[240px]",
  wide: "w-[200px] h-[300px]",
};

const BookCover = ({
  className,
  variant = "regular",
  coverColor = "#012b48",
  coverImage = "https://placehold.co/400x600.png",
}: Props) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        variantStyles[variant],
        className
      )}
    >
      {/* book cover svg */}

      <BookCoverSvg coverColor={coverColor} />
      {/* book preview */}
      <div className="absolute z-10 " style={{ left: "10%", width: "89%" }}>
        <Image
          src={coverImage}
          alt="Book cover"
          height={300}
          width={300}
          className="rounded-sm  "
        />
      </div>
    </div>
  );
};
export default BookCover;
