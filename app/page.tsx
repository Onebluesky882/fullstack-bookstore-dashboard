import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <BookOverview />
      <BookList />
    </div>
  );
}
