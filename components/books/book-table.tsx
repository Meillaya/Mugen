"use client";

import { Star } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Book {
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
}

interface BookTableProps {
  books: Book[];
}

export function BookTable({ books }: BookTableProps) {
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
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Book</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Progress</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Dates</TableHead>
            <TableHead className="w-[70px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books.map((book) => {
            const progress = book.pagesRead && book.pagesTotal
              ? Math.round((book.pagesRead / book.pagesTotal) * 100)
              : 0;

            return (
              <TableRow key={book.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="relative h-16 w-12 overflow-hidden rounded">
                      <Image
                        src={book.coverImage}
                        alt={book.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{book.title}</div>
                      {book.notes && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="text-xs text-muted-foreground">
                              View notes
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">{book.notes}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>
                  <span className={cn(
                    "text-xs font-medium px-2.5 py-0.5 rounded-full",
                    statusColors[book.status]
                  )}>
                    {statusText[book.status]}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="w-[150px] space-y-1">
                    {book.pagesTotal ? (
                      <>
                        <div className="flex text-xs justify-between">
                          <span>{book.pagesRead || 0} / {book.pagesTotal}</span>
                          <span>{progress}%</span>
                        </div>
                        <Progress value={progress} className="h-1" />
                      </>
                    ) : (
                      <span className="text-muted-foreground text-sm">-</span>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  {book.rating ? (
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">
                        {book.rating}
                      </span>
                    </div>
                  ) : (
                    <span className="text-muted-foreground text-sm">-</span>
                  )}
                </TableCell>
                <TableCell>
                  <div className="text-sm space-y-1">
                    {book.startDate && (
                      <div>
                        <span className="text-muted-foreground">Started: </span>
                        {new Date(book.startDate).toLocaleDateString()}
                      </div>
                    )}
                    {book.completionDate && (
                      <div>
                        <span className="text-muted-foreground">Finished: </span>
                        {new Date(book.completionDate).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
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
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}