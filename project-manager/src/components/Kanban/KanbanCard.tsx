import { KanbanCardProps, KanbanCardStyles } from "../../types/KanbanCardType";

const KanbanCard: React.FC<KanbanCardProps> = ({
	priority,
	name,
	progress,
	users,
	img,
}) => {
	const cardClasses = KanbanCardStyles[priority];

	return (
		<>
			<div className="w-full bg-white rounded-lg px-1 pt-1 pb-[2px] flex flex-col gap-[4px] sm:px-2 sm:pt-2 sm:pb-[6px] sm:gap-0">
				{img ? (
					<img
						className="max-w-full rounded-xl mb-2"
						src={img}
						alt="task"
					/>
				) : (
					""
				)}
				<div
					className="self-start rounded-xl flex items-center justify-center px-[2px] py-[1px] sm:px-[5px] sm:py-[2px] sm:mb-2"
					style={{ backgroundColor: cardClasses.backgroundColor }}
				>
					<h3
						className="text-[4px] font-semibold sm:text-[8px]"
						style={{ color: cardClasses.color }}
					>
						{priority}
					</h3>
				</div>

				<h2 className="text-[6px] text-azul-escuro font-bold sm:text-[11px] sm:mb-[10px]">
					{name}
				</h2>

				<div>
					<p className="text-cinza-3 text-[5px] font-medium flex justify-between mb-[2px] sm:text-[9px]">
						Progress:{" "}
						<span className="text-azul-escuro font-bold ">
							{progress}%
						</span>
					</p>
					<div className="w-full h-[3px] bg-cinza-4 rounded-xl flex items-center mb-1 sm:mb-[10px]">
						<div
							className="h-1 bg-roxo-claro rounded-xl"
							style={{ width: `${progress}%` }}
						></div>
					</div>
				</div>

				<div className="flex justify-between">
					<div id="users" className="flex items-center">
						{users.length > 1 && users.length < 5 ? (
							users.map((user, key) => (
								<img
									className="w-[14px] h-[14px] rounded-full border-2 border-white [&:not(:first-child)]:ml-[-6px]"
									key={key}
									src={user.profilePicUrl}
									alt="User"
								/>
							))
						) : (
							<>
								{users.slice(0, 4).map((user, key) => (
									<img
										className="w-[14px] h-[14px] rounded-[50%] border-2 border-white [&:not(:first-child)]:ml-[-8px] sm:w-[21px] sm:h-[21px]"
										key={key}
										src={user.profilePicUrl}
										alt="User"
									/>
								))}
								{users.length > 3 && (
									<div className="w-[10px] h-[10px] ml-[-8px] rounded-[50%] flex justify-center items-center bg-gray-300 text-[5px] text-roxo-claro font-extrabold sm:text-[9px] sm:w-[17px] sm:h-[17px]">
										{`${users.length - 3}+`}
									</div>
								)}
							</>
						)}
					</div>

					<div className="flex gap-[2px]">
						<div className="flex items-center ">
							<img
								className="w-[5px] h-[5px] sm:w-[10px] sm:h-[10px]"
								src="src/assets/message-bubble.svg"
								alt=""
							/>
							<span className="text-azul-escuro text-[5px] font-semibold sm:text-[10px]">
								987
							</span>
						</div>
						<div className="flex items-center">
							<img
								className="w-[5px] h-[5px] sm:w-[12px] sm:h-[12px]"
								src="src/assets/check-circle.svg"
								alt=""
							/>
							<span className="text-azul-escuro text-[5px] font-semibold sm:text-[10px]">
								987
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default KanbanCard;
