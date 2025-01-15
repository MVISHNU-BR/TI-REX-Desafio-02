import { KanbanColumnProps, columnColors } from "../../types/KanbanColumnType";
import './KanbanColumn.css'

const KanbanColumn: React.FC<KanbanColumnProps> = ({ type, children }) => {
	const classes = columnColors[type];
	const cards = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

	return (
		<>
			<div
				id="column"
				className="w-[109px] h-[196px] bg-cinza-2 rounded-2xl relative flex items-center justify-center px-[6px] pt-5 pb-[3px] sm:w-52 sm:h-[370px] sm:px-[10px] sm:pt-9 sm:pb-1 lg:w-[310px] lg:h-[553px] lg:px-4 lg:pt-14 lg:pb-2"
			>
				{/* Topo da coluna */}
				<div
					className="absolute top-0 left-0 w-full h-auto rounded-2xl flex justify-between items-center py-[2px] pl-[3px] pr-[5px] sm:py-1 sm:pl-[5px] sm:pr-2 md:top-[-12px] lg:py-[6px] lg:pl-[6px] lg:rounded-full"
					style={{ backgroundColor: classes.backgroundColor }}
				>
					<div className="flex items-center gap-[2px] sm:gap-1">
						{/* Quantidade de cards */}
						<div
							className="text-white text-[5px] font-semibold px-1 py-[2px] rounded-xl sm:text-[10px] sm:px-2 sm:py-1 lg:text-sm lg:px-3 lg:py-[6px] lg:rounded-full"
							style={{ backgroundColor: classes.color }}
						>
							<h1>{cards.length}</h1>
						</div>
						{/* Nome da coluna */}
						<h1
							className="text-[6px] flex items-baseline font-bold sm:text-xs lg:text-base"
							style={{ color: classes.color }}
						>
							{classes.text}
						</h1>
					</div>
					{/* Ícone mais "+" */}
					<svg
						fill={classes.color}
						className="w-[9px] h-[10px] sm:w-4 sm:h-4 lg:w-5 lg:h-5"
						viewBox="0 0 448 512"
					>
						<path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
					</svg>
				</div>
				{/* Cards container */}
				<div
					id="column-body"
					className="w-full h-full flex flex-col gap-[5px] sm:gap-[10px] overflow-y-auto"
				>
					{children}
				</div>
			</div>
		</>
	);
};

export default KanbanColumn;
