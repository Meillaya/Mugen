import { BooksView } from "@/components/books/books-view";
import { Suspense } from "react";
import { BooksLoading } from "@/components/books/books-loading";

export default function Home() {
  return (
    <main className="container py-8">
      <Suspense fallback={<BooksLoading />}>
        <BooksView />
      </Suspense>
    </main>
  );
}