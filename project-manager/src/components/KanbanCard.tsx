import { KanbanCardProps, KanbanCardStyles } from "../types/KanbanCardType"

const KanbanCard: React.FC<KanbanCardProps> = ({priority}) => {
  const cardClasses = KanbanCardStyles[priority]

  return (
    <>
      <div className="w-full h-16 bg-white rounded-lg">
        <h3 className="text-[4px] font-semibold" style={{backgroundColor: cardClasses.backgroundColor}}>{priority}</h3>
      </div>
    </>
  )
}

export default KanbanCard;