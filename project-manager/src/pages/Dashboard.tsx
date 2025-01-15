import Header from "../components/Header";
import HeaderMenu from "../components/HeaderMenu";
import { useEffect, useRef, useState } from "react";
import KanbanCard from "../components/Kanban/KanbanCard";
import KanbanColumn from "../components/Kanban/KanbanColumn";
import ResponsiveGrid from "../components/Kanban/ResponsiveGrid";
import Footer from "../components/Footer";
import CreateTask from "../components/CreateTask";
import { getTasks } from "../services/Task.services";
import { useUser } from "@clerk/clerk-react";
import { TaskInterface } from "../types/TaskInterface";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useUser();

  const [tasks, setTasks] = useState<TaskInterface[]>([]);
  const userId = user?.id || "";

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTasks(userId);
      setTasks(data);
    };
    fetchData();
  }, [isModalOpen, userId]);

  const users = [
    { name: "John", profilePicUrl: "src/assets/profile-picture-1.jpg" },
    { name: "John", profilePicUrl: "src/assets/profile-picture-2.jpg" },
    { name: "John", profilePicUrl: "src/assets/profile-picture-2.jpg" },
    { name: "John", profilePicUrl: "src/assets/profile-picture-2.jpg" },
    { name: "John", profilePicUrl: "src/assets/profile-picture-2.jpg" },
    { name: "John", profilePicUrl: "src/assets/profile-picture-2.jpg" },
  ];

  // Dimensões do elemento pai para grid de fundo
  const parentRef = useRef(null);
  const randonNumber = () => {
    return Math.floor(Math.random() * 100);
  };
  return (
    <>
      <Header>
        <HeaderMenu></HeaderMenu>
      </Header>
      {isModalOpen && <CreateTask setIsModalOpen={setIsModalOpen} />}
      <main
        ref={parentRef}
        className="relative bg-slate-100  max-w-none max-h-none flex flex-col items-center gap-[76px] px-5 pt-36 pb-7 overflow-auto touch-auto sm:px-9 sm:pt-64 sm:pb-16 sm:gap-16 md:py-9 md:justify-center"
      >
        <ResponsiveGrid parentRef={parentRef} />
        <div className="columns  flex w-full justify-center gap-7">
          <KanbanColumn type="to-do" onOpenModal={() => setIsModalOpen(true)}>
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
            onOpenModal={() => setIsModalOpen(true)}
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
          <KanbanColumn type="done" onOpenModal={() => setIsModalOpen(true)}>
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
        </div>
        <div
          id="flag"
          className="bg-preto-50 w-full px-[10px] pb-3 pt-[6px] rounded-2xl z-10 sm:px-5 sm:py-[18px] md:hidden"
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
            Adicione ideias, notas e faça um plano de organização de onde
            estiver.
          </p>
          <div className="flex justify-between mt-3">
            <button className="bg-white py-[5px] px-[18px] font-medium text-[13px] rounded-2xl">
              Agora não
            </button>
            <button className="bg-roxo-claro py-[5px] px-[18px] font-medium text-[13px] text-white rounded-2xl">
              Usar o aplicativo
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
