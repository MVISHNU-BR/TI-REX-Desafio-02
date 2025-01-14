import { KanbanColumnProps, columnColors } from "../types/KanbanColumnType"

const KanbanColumn: React.FC<KanbanColumnProps> = ({ type, children }) => {
  const classes = columnColors[type];
  const cards = [1];

  return (
    <>
      <div id="column" className="w-[109px] h-[196px] max-h-[196px] bg-cinza-2 rounded-2xl relative px-[6px] pt-5 pb-[3px]">
        <div id="column-top" className="absolute top-0 left-0 w-full h-auto rounded-2xl flex justify-between items-center py-[2px] pl-[3px] pr-[5px]" style={{ backgroundColor: classes.backgroundColor}}>
            <h1 className="text-[6px] flex items-baseline font-bold" style={{color: classes.color}}>
              <span className="text-white font-semibold mr-[2px] px-1 pt-[2px] rounded-xl flex items-center justify-center" style={{backgroundColor: classes.color}}>{cards.length}</span>
              {classes.text}
            </h1>
            <svg fill={classes.color} width="9" height="10"><path d="M7.523 5a.396.396 0 0 1-.396.396H4.62v2.508a.396.396 0 1 1-.791 0V5.396H1.32a.396.396 0 0 1 0-.792h2.508V2.096a.396.396 0 0 1 .791 0v2.508h2.508A.396.396 0 0 1 7.523 5Z"/></svg>
        </div>
        {children}
      </div>
    </>
  )
}

export default KanbanColumn;