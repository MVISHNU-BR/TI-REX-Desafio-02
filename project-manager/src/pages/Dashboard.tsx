// Componentes
import Header from "../components/Header";
import HeaderMenu from "../components/HeaderMenu";
import KanbanCard from "../components/Kanban/KanbanCard";
import KanbanColumn from "../components/Kanban/KanbanColumn";
import ResponsiveGrid from "../components/Kanban/ResponsiveGrid";
import Footer from "../components/Footer";
import CreateTask from "../components/CreateTask";
import PinchAndPan from "../components/Kanban/PinchAndPan";
import "./Kanban.css";

// Hooks
import { useEffect, useRef, useState } from "react";

// API
import { getTasks } from "../services/Task.services";
import { useUser } from "@clerk/clerk-react";
import { TaskInterface } from "../types/TaskInterface";
import TouchComponent from "../components/Kanban/PinchAndPan";
import ProjectInfo from "../components/Kanban/ProjectInfo";

export default function Dashboard() {
	// states
	const [createTaskState, setCreateTaskState] = useState(false);
	const [bannerState, setBannerState] = useState(true);
	const [isOpen, setIsOpen] = useState(false);

	// Classes para o <main />
	const openCreateTaskMainAdjusts = createTaskState ? "px-6 py-4 sm:px-32" : "px-5 pt-[419px] pb-7 md:pt-[691px] pb-[66px";
	const openFixedCardMainAdjusts = isOpen ? "lg:pr-[394px]" : "";

	// clerk
	const { user } = useUser();
	const [tasks, setTasks] = useState<TaskInterface[]>([]);
	const userId = user?.id || "";

	// Popular colunas com as tasks
	useEffect(() => {
		const fetchData = async () => {
			const data = await getTasks();
			setTasks(data);
		};
		fetchData();
	}, [createTaskState, userId]);

	// Dummy array
	const users = [
		{
			name: "John",
			jobPosition: "Project Manager",
			profilePicUrl: "src/assets/profile-picture-1.jpg",
		},
		{
			name: "John",
			jobPosition: "Project Manager",
			profilePicUrl: "src/assets/profile-picture-2.jpg",
		},
		{
			name: "John",
			jobPosition: "Project Manager",
			profilePicUrl: "src/assets/profile-picture-2.jpg",
		},
		{
			name: "John",
			jobPosition: "Project Manager",
			profilePicUrl: "src/assets/profile-picture-2.jpg",
		},
		{
			name: "John",
			jobPosition: "Project Manager",
			profilePicUrl: "src/assets/profile-picture-2.jpg",
		},
		{
			name: "John",
			jobPosition: "Project Manager",
			profilePicUrl: "src/assets/profile-picture-2.jpg",
		},
	];

	// Dimensões do elemento pai para grid de fundo
	const parentRef = useRef(null);

	// Progresso aleatório
	const randonNumber = () => {
		return Math.floor(Math.random() * 100);
	};

	return (
		<div className="flex flex-col min-h-screen ">
			<Header>
				<HeaderMenu></HeaderMenu>
			</Header>
			<main
				ref={parentRef}
				className={`relative flex-1 overflow-hidden bg-slate-100 flex flex-col items-center justify-end sm:px-9  ${openCreateTaskMainAdjusts} ${openFixedCardMainAdjusts}`}
			>
				<ResponsiveGrid parentRef={parentRef} />


				<ProjectInfo
					users={users}
					setIsOpen={setIsOpen}
					isOpen={isOpen}
					/>
				
				{/* Adicionar task */}
				{createTaskState && (
					<CreateTask setCreateTaskState={setCreateTaskState} createTaskState={createTaskState} />
				)}
				

				<TouchComponent>

					<KanbanColumn
						type="to-do"
						onOpenModal={() => setCreateTaskState(true)}
					>
						{tasks
							.filter((task) => task.status === "To-Do")
							.map((task) => (
								<KanbanCard
									key={task.id}
									priority={task.priority}
									name={task.title}
									users={users}
									progress={randonNumber()}
								/>
							))}
					</KanbanColumn>
					<KanbanColumn
						type="in-progress"
						onOpenModal={() => setCreateTaskState(true)}
					>
						{tasks
							.filter((task) => task.status === "In Progress")
							.map((task) => (
								<KanbanCard
									key={task.id}
									priority={task.priority}
									name={task.title}
									users={users}
									progress={randonNumber()}
								/>
							))}
					</KanbanColumn>
					<KanbanColumn
						type="done"
						onOpenModal={() => setCreateTaskState(true)}
					>
						{tasks
							.filter((task) => task.status === "Done")
							.map((task) => (
								<KanbanCard
									key={task.id}
									priority={task.priority}
									name={task.title}
									users={users}
									progress={randonNumber()}
								/>
							))}
					</KanbanColumn>
				</TouchComponent>

				{/* Banner */}
				<div
					id="flag"
					className={bannerState ? "bg-preto-50 place-self-end w-full px-[10px] pb-3 pt-[6px] rounded-2xl z-10 sm:px-5 sm:py-[18px] md:hidden" : "hidden"}
				>
					<header className="rounded-2xl flex">
						<img
							src="src/assets/logo.svg"
							alt="Project manager logo"
							className="w-[22px] h-[22px] mr-2 mb-2 sm:w-8 sm:h-8"
						/>
						<h1 className="text-white font-bold text-base sm:text-lg">
							Trabalhar no aplicativo
						</h1>
					</header>
					<p className="text-white font-normal text-[13px] sm:text-[15px]">
						Adicione ideias, notas e faça um plano de organização de
						onde estiver.
					</p>
					<div className="flex justify-between mt-3">
						<button
							onClick={() => setBannerState(!bannerState)}
							className="bg-white py-[5px] px-[18px] font-medium text-[13px] rounded-2xl"
						>
							Agora não
						</button>
						<button className="bg-roxo-claro py-[5px] px-[18px] font-medium text-[13px] text-white rounded-2xl">
							Usar o aplicativo
						</button>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
