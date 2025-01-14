export interface KanbanColumnProps {
  type: "to-do" | "in-progress" | "done",
  children?: React.ReactNode
}

export const columnColors: Record<KanbanColumnProps["type"], { backgroundColor: string; color: string, text: string }> = {
  "to-do": { backgroundColor: "#D3D0F8", color: "#4F46E5", text: "To do" },
  "in-progress": { backgroundColor: "#FCF4B6", color: "#F59E0B", text: "In progress" },
  "done": { backgroundColor: "#C7F0D6", color: "#22C55E", text: "Done" },
};
