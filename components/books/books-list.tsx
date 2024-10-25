"use client";

import { useState } from "react";
import { BookCard } from "./book-card";
import { BookTable } from "./book-table";
import { useEffect } from "react";

const mockBooks = [
  {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=600&fit=crop",
    status: "READING",
    rating: 4,
    pagesRead: 156,
    pagesTotal: 304,
    startDate: "2024-02-01",
    notes: "A fascinating exploration of parallel lives",
  },
  {
    id: "2",
    title: "Project Hail Mary",
    author: "Andy Weir",
    coverImage: "https://images.unsplash.com/photo-1614544048536-0d28caf77f41?q=80&w=400&h=600&fit=crop",
    status: "TO_READ",
    pagesTotal: 496,
  },
  {
    id: "3",
    title: "Atomic Habits",
    author: "James Clear",
    coverImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&h=600&fit=crop",
    status: "COMPLETED",
    rating: 5,
    pagesRead: 320,
    pagesTotal: 320,
    startDate: "2024-01-15",
    completionDate: "2024-02-15",
    notes: "Excellent book on habit formation",
  },
];

export function BooksList() {
  const [view, setView] = useState<"grid" | "list">("grid");

  useEffect(() => {
    const handleViewChange = (event: CustomEvent) => {
      setView(event.detail);
    };

    window.addEventListener("viewChange", handleViewChange as EventListener);
    return () => {
      window.removeEventListener("viewChange", handleViewChange as EventListener);
    };
  }, []);

  return (
    <div className="min-h-[200px]">
      {view === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <BookTable books={mockBooks} />
      )}
    </div>
  );
}