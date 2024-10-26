import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HomeActions() {
  return (
    <div className="text-center">
      <Button asChild size="lg">
        <Link href="/books">Get Started</Link>
      </Button>
    </div>
  );
}