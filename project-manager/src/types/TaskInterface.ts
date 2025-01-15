export interface TaskInterface {
  id?: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  addPeople: string;
  status: "To-Do" | "In Progress" | "Done";
  priority: "Low" | "Mid" | "High";
  userId: string;
}
