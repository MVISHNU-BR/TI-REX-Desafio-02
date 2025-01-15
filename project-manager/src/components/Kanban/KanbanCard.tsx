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
			<div className="w-full bg-white rounded-lg px-1 pt-1 pb-[2px] flex flex-col gap-[4px] sm:px-2 sm:pt-2 sm:pb-[6px] sm:gap-0 lg:p-3 ">
				{/* Verificar se task tem imagem */}
				{img ? (
					<img
						className="max-w-full rounded-xl mb-2"
						src={img}
						alt="task"
					/>
				) : (
					""
				)}
				{/* Prioridade */}
				<div
					className="self-start rounded-xl flex items-center justify-center px-[2px] py-[1px] sm:px-[5px] sm:py-[2px] sm:mb-2 lg:px-2 lg:py-1"
					style={{ backgroundColor: cardClasses.backgroundColor }}
				>
					<h3
						className="text-[4px] font-semibold sm:text-[8px] lg:text-sm"
						style={{ color: cardClasses.color }}
					>
						{priority}
					</h3>
				</div>
				
				{/* Título da task */}
				<h2 className="text-[6px] text-azul-escuro font-bold sm:text-[11px] sm:mb-[10px] lg:text-base">
					{name}
				</h2>

				{/* Texto e barra de progresso */}
				<div>
					<p className="text-cinza-3 text-[5px] font-medium flex justify-between mb-[2px] sm:text-[9px] lg:text-sm lg:mb-2">
						Progress:{" "}
						<span className="text-azul-escuro font-bold ">
							{progress}%
						</span>
					</p>
					<div className="w-full h-[3px] bg-cinza-4 rounded-xl flex items-center mb-1 sm:mb-[10px] lg:mb-4">
						<div
							className="h-1 bg-roxo-claro rounded-xl"
							style={{ width: `${progress}%` }}
						></div>
					</div>
				</div>

				{/* Usuários e comentários */}
				<div className="flex justify-between">
					<div id="users" className="flex items-center">
						{users.length > 1 && users.length < 5 ? (
							users.map((user, key) => (
								<img
									className="w-[14px] h-[14px] rounded-full border-2 border-white [&:not(:first-child)]:ml-[-6px] sm:w-[21px] sm:h-[21px]"
									key={key}
									src={user.profilePicUrl}
									alt="User"
								/>
							))
						) : (
							// Renderizar indicador de mais usuários em caso de mais de 4 usuários na mesma task
							<>
								{users.slice(0, 4).map((user, key) => (
									<img
										className="w-3 h-3 rounded-[50%] border border-white [&:not(:first-child)]:ml-[-6px] sm:w-[21px] sm:h-[21px] sm:[&:not(:first-child)]:ml-[-9px] lg:w-8 lg:h-8 lg:[&:not(:first-child)]:ml-[-12px]"
										key={key}
										src={user.profilePicUrl}
										alt="User"
									/>
								))}
								{/* Indicador de mais usuários */}
								{users.length > 4 && (
									<div className="w-[10px] h-[10px] ml-[-6px] rounded-[50%] flex justify-center items-center bg-gray-300 text-[5px] text-roxo-claro font-extrabold sm:[&:not(:first-child)]:ml-[-8px] sm:text-[9px] sm:w-[17px] sm:h-[17px] lg:w-7 lg:h-7 lg:ml-[-12px] lg:text-sm">
										{`${users.length - 3}+`}
									</div>
								)}
							</>
						)}
					</div>

					<div className="flex gap-[2px]">
						<div className="flex items-center ">
							<img
								className="w-[5px] h-[5px] sm:w-[10px] sm:h-[10px] lg:w-4 lg:h-4"
								src="src/assets/message-bubble.svg"
								alt=""
							/>
							<span className="text-azul-escuro text-[5px] font-semibold sm:text-[10px] lg:text-base">
								987
							</span>
						</div>
						<div className="flex items-center">
							<img
								className="w-[5px] h-[5px] sm:w-[12px] sm:h-[12px] lg:w-4 lg:h-4"
								src="src/assets/check-circle.svg"
								alt=""
							/>
							<span className="text-azul-escuro text-[5px] font-semibold sm:text-[10px] lg:text-base">
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
