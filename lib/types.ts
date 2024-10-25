export interface Book {
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

export type ViewMode = "grid" | "list";