import { BookOpen, TrendingUp, Target } from "lucide-react";

export function HomeFeatures() {
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      <div className="flex flex-col items-center text-center space-y-2 p-6 rounded-lg border bg-card">
        <BookOpen className="h-12 w-12 text-primary" />
        <h2 className="text-xl font-semibold">Track Books</h2>
        <p className="text-muted-foreground">Organize your reading list and track your progress</p>
      </div>
      <div className="flex flex-col items-center text-center space-y-2 p-6 rounded-lg border bg-card">
        <TrendingUp className="h-12 w-12 text-primary" />
        <h2 className="text-xl font-semibold">View Stats</h2>
        <p className="text-muted-foreground">Analyze your reading habits with detailed statistics</p>
      </div>
      <div className="flex flex-col items-center text-center space-y-2 p-6 rounded-lg border bg-card">
        <Target className="h-12 w-12 text-primary" />
        <h2 className="text-xl font-semibold">Set Goals</h2>
        <p className="text-muted-foreground">Set and track your yearly reading goals</p>
      </div>
    </div>
  );
}