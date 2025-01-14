type user = {
  name: string
  profilePicUrl: string
}

export interface KanbanCardProps {
  priority: "low" | "mid" | "high"
  name: string
  progress: string
  users: [ user ]
}

export const KanbanCardStyles: Record<KanbanCardProps["priority"], { color: string, backgroundColor: string}> = {
  "low": { color: "#4F46E5", backgroundColor: "#EEF2FF"},
  "mid": { color: "#F59E0B", backgroundColor: "#FFFBEB"},
  "high": { color: "#fff", backgroundColor: "#BD2323"}
}