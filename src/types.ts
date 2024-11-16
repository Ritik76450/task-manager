export interface Task {
    id: string;
    title: string;
    isCompleted: boolean;
    priority: "low" | "medium" | "high";
  }
  