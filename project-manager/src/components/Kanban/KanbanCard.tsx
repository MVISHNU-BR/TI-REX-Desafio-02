import { KanbanCardProps, KanbanCardStyles } from "../../types/KanbanCardType";

const KanbanCard: React.FC<KanbanCardProps> = ({ priority, name, progress, users, img }) => {
	const cardClasses = KanbanCardStyles[priority];

	return (
		<>
			<div className="w-full bg-white rounded-lg px-1 pt-1 pb-[2px] flex flex-col gap-[5px] sm:px-2 sm:pt-2 sm:pb-[6px]">
        {img ? <img className="max-w-[86px] max-h-[86px] rounded-md" src={img} alt="task"/> : ""}
        <div className="w-fit h-fit px-[2px] py-[1px] flex items-center rounded-xl" style={{backgroundColor: cardClasses.backgroundColor}}>
          <h3
            className="text-[4px] font-semibold"
            style={{ color: cardClasses.color }}
          >
            {priority}
          </h3>
        </div>

        <h2 className="text-[6px] text-azul-escuro font-bold">{name}</h2>

        <div>
          <p className="text-cinza-3 text-[5px] font-medium flex justify-between mb-[2px]">Progress: <span className="text-azul-escuro font-semibold ">{progress}%</span></p>
          <div className="w-full h-[3px] bg-cinza-4 rounded-xl flex items-center">
            <div className="h-1 bg-roxo-claro rounded-xl" style={{width: `${progress}%`}}></div>
          </div>
        </div>

        <div className="flex justify-between">
          <div id="users" className="flex items-center">
            {users.length > 1 && users.length < 5 ? 
              users.map( (user, key) => <img className="w-[14px] h-[14px] rounded-full border-2 border-white [&:not(:first-child)]:ml-[-6px]" key={key} src={user.profilePicUrl} alt="User"/>) : (
              <>
                {users.slice(0, 3).map((user, key) => (
                  <img
                    className="w-[14px] h-[14px] rounded-[50%] border-2 border-white [&:not(:first-child)]:ml-[-6px]"
                    key={key}
                    src={user.profilePicUrl}
                    alt="User"
                  />
                ))}
                {users.length > 3 && (
                  <div className="w-[10px] h-[10px] ml-[-6px] rounded-[50%] flex justify-center items-center bg-gray-300 text-[5px] text-roxo-claro font-extrabold">
                    {`${users.length - 3}+`}
                  </div>
                )}
              </>
            )}
          </div>

          <div className="flex gap-1">
            <div className="flex items-center gap-[1px]">
              <img className="w-[7px] h-[7px]" src="src/assets/message-bubble.svg" alt="" />
              <span className="text-azul-escuro text-[5px] font-semibold">987</span>
            </div>
            <div className="flex items-center gap-[1px]">
              <img className="w-[8px] h-[8px] mb-[2px]" src="src/assets/check-circle.svg" alt="" />
              <span className="text-azul-escuro text-[5px] font-semibold">987</span>
            </div>
          </div>
        </div>
			</div>
		</>
	);
};

export default KanbanCard;
