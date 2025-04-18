import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "./constants";

export default function Home() {
  const bookPreview = sampleBooks[0];
  return (
    <div>
      <BookOverview props={bookPreview} />
    </div>
  );
}
