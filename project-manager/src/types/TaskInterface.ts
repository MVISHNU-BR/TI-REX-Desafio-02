
export interface TaskInterface{
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    addPeople: string;
    status: "To-Do" | "In Progress" | "Done";
    priority: "Low" | "Mid" | "High";
}