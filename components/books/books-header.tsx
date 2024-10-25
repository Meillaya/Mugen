"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlusCircle, Search, LayoutGrid, List } from "lucide-react";
import { AddBookDialog } from "./add-book-dialog";

export function BooksHeader() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">My Books</h1>
        <Button onClick={() => setIsDialogOpen(true)}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Book
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search books..."
            className="pl-9"
          />
        </div>
        <div className="flex gap-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Books</SelectItem>
              <SelectItem value="to-read">To Read</SelectItem>
              <SelectItem value="reading">Reading</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="dnf">DNF</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex items-center border rounded-md">
            <Button
              variant={view === "grid" ? "secondary" : "ghost"}
              size="icon"
              onClick={() => {
                setView("grid");
                window.dispatchEvent(new CustomEvent("viewChange", { detail: "grid" }));
              }}
              className="rounded-none rounded-l-md"
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button
              variant={view === "list" ? "secondary" : "ghost"}
              size="icon"
              onClick={() => {
                setView("list");
                window.dispatchEvent(new CustomEvent("viewChange", { detail: "list" }));
              }}
              className="rounded-none rounded-r-md"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <AddBookDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  );
}