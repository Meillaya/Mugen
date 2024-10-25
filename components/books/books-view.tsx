import { BooksHeader } from "./books-header";
import { BooksList } from "./books-list";

export function BooksView() {
  return (
    <div className="space-y-8">
      <BooksHeader />
      <BooksList />
    </div>
  );
}