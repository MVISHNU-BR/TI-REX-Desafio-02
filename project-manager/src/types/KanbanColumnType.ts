export interface KanbanColumnProps {
  type: "to-do" | "in-progress" | "done";
}


export const columnColors: Record<KanbanColumnProps["type"], { background: string; text: string, title: string }> = {
  "to-do": { background: "roxo-transparente", text: "roxo-claro", title: "To do" },
  "in-progress": { background: "#ffc107", text: "#000000", title: "In progress" },
  "done": { background: "#28a745", text: "#ffffff", title: "Done" },
};
