"use client";

import { Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface BookCardProps {
  book: {
    id: string;
    title: string;
    author: string;
    coverImage: string;
    status: "TO_READ" | "READING" | "COMPLETED" | "DNF";
    rating?: number;
    pagesRead?: number;
    pagesTotal?: number;
    startDate?: string;
    completionDate?: string;
    notes?: string;
  };
}

export function BookCard({ book }: BookCardProps) {
  const progress = book.pagesRead && book.pagesTotal
    ? Math.round((book.pagesRead / book.pagesTotal) * 100)
    : 0;

  const statusColors = {
    TO_READ: "bg-blue-500/10 text-blue-500",
    READING: "bg-yellow-500/10 text-yellow-500",
    COMPLETED: "bg-green-500/10 text-green-500",
    DNF: "bg-red-500/10 text-red-500",
  };

  const statusText = {
    TO_READ: "To Read",
    READING: "Reading",
    COMPLETED: "Completed",
    DNF: "DNF",
  };

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[2/3]">
        <Image
          src={book.coverImage}
          alt={book.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon">
                ⋮
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Update Progress</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold leading-none">{book.title}</h3>
            <p className="text-sm text-muted-foreground">{book.author}</p>
          </div>
          <div className="flex items-center justify-between">
            <span className={cn(
              "text-xs font-medium px-2.5 py-0.5 rounded-full",
              statusColors[book.status]
            )}>
              {statusText[book.status]}
            </span>
            {book.rating && (
              <div className="flex items-center text-yellow-500">
                <Star className="h-4 w-4 fill-current" />
                <span className="ml-1 text-sm font-medium">{book.rating}</span>
              </div>
            )}
          </div>
          {book.pagesTotal && (
            <div className="space-y-1">
              <div className="flex text-xs justify-between">
                <span>{book.pagesRead || 0} / {book.pagesTotal}</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-1" />
            </div>
          )}
        </div>
      </CardContent>
      {book.notes && (
        <CardFooter className="px-4 py-3 border-t bg-muted/50">
          <p className="text-xs text-muted-foreground line-clamp-2">{book.notes}</p>
        </CardFooter>
      )}
    </Card>
  );
}