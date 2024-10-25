import Link from "next/link";
import { BookOpen } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export function MainNav() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-bold">Bookshelf</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/books" className="text-sm font-medium transition-colors hover:text-primary">
              My Books
            </Link>
            <Link href="/stats" className="text-sm font-medium transition-colors hover:text-primary">
              Statistics
            </Link>
            <Link href="/goals" className="text-sm font-medium transition-colors hover:text-primary">
              Reading Goals
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button>Sign In</Button>
        </div>
      </div>
    </header>
  );
}