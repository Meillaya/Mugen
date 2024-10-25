import { Suspense } from "react";
import { BooksList } from "@/components/books/books-list";
import { BooksHeader } from "@/components/books/books-header";
import { BooksLoading } from "@/components/books/books-loading";

export default function BooksPage() {
  return (
    <div className="space-y-6">
      <BooksHeader />
      <Suspense fallback={<BooksLoading />}>
        <BooksList />
      </Suspense>
    </div>
  );
}