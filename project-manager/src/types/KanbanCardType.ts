type user = {
  name: string
  profilePicUrl: string
}

export interface KanbanCardProps {
  priority: "Low" | "Mid" | "High"
  name: string
  progress: number
  users: user[],
  img?: string
}

export const KanbanCardStyles: Record<KanbanCardProps["priority"], { color: string, backgroundColor: string}> = {
  "Low": { color: "#4F46E5", backgroundColor: "#EEF2FF"},
  "Mid": { color: "#F59E0B", backgroundColor: "#FFFBEB"},
  "High": { color: "#fff", backgroundColor: "#BD2323"}
}