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
import "./Kanban.css";
export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
  const randonNumber = () => {
    return Math.floor(Math.random() * 100);
  };

  const handleOpen = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="flex flex-col  min-h-screen h-screen">
        <Header>
          <HeaderMenu></HeaderMenu>
        </Header>
        {isModalOpen && <CreateTask setIsModalOpen={setIsModalOpen} />}
        <main
          ref={parentRef}
          className={`relative h-full bg-slate-100 max-w-none max-h-none flex flex-col items-center gap-[76px] px-5 pt-36 pb-7 sm:px-9 sm:pt-64 sm:pb-16 sm:gap-16 lg:py-9 lg:justify-center ${
            isOpen ? "h-[565px] sm:h-[905px] lg:pl-10" : ""
          }`}
        >
          <ResponsiveGrid parentRef={parentRef} />
          {/* Project info modal */}
          <div
            id="project-info"
            className={`w-9 h-9  bg-cinza-1 z-50 absolute top-5 right-5 ${
              isOpen
                ? "rounded-3xl w-[247px] h-fit justify-start px-3 py-6 sm:w-[298px] sm:px-[21px]"
                : "rounded-full flex flex-col items-center justify-center"
            }`}
          >
            <div className="flex justify-between">
              <h1
                className={`${
                  isOpen
                    ? "block text-white text-base font-bold sm:text-xl"
                    : "hidden"
                }`}
              >
                In this project
              </h1>
              <button
                onClick={handleOpen}
                className={`w-9 h-9 flex justify-center sm:w-10 sm:h-10 ${
                  isOpen ? "items-baseline" : "items-center"
                }`}
              >
                <svg
                  className={`w-4 h-4 sm:w-5 sm:h-5`}
                  fill="white"
                  viewBox="0 0 384 512"
                >
                  <path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3L32 352c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 384l64 0 0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96z" />
                </svg>
              </button>
            </div>

            <div
              className={`transition-all ${
                isOpen ? "flex flex-col gap-2 mb-2 sm:gap-3" : "hidden"
              }`}
            >
              {users.length > 1 && users.length < 4 ? (
                users.map((user, key) => (
                  <InfoCard
                    user={user.name}
                    profilePicUrl={user.profilePicUrl}
                    jobPosition={user.jobPosition}
                    size={"big"}
                    key={key}
                  />
                ))
              ) : (
                // Renderizar indicador de mais usuários em caso de mais de 4 usuários na mesma task
                <>
                  {users.slice(0, 3).map((user, key) => (
                    <InfoCard
                      user={user.name}
                      profilePicUrl={user.profilePicUrl}
                      jobPosition={user.jobPosition}
                      key={key}
                      size={"big"}
                    />
                  ))}
                  {/* Indicador de mais usuários */}
                  {users.length > 3 && (
                    <p className="text-right text-azul-claro-2 font-bold text-xs sm:text-[13px]">
                      View all ({users.length - 3})
                    </p>
                  )}
                </>
              )}
            </div>

            <h3
              className={
                isOpen
                  ? "text-white text-base font-bold mb-[6px] sm:text-xl sm:mb-[6px]"
                  : "hidden"
              }
            >
              Metrics
            </h3>
            <div className={isOpen ? "flex gap-1" : "hidden"}>
              <div className="flex flex-col gap-2 w-[60%]">
                <div className="bg-[#F6F6F6] py-2 px-1 rounded-xl">
                  <h1 className="text-xs text-roxo font-bold sm:text-sm">
                    Total tasks
                  </h1>
                  <h2 className="text-xl text-roxo-claro font-bold sm:text-2xl">
                    {10}{" "}
                    <span className="text-xs text-roxo font-bold sm:text-[13px]">
                      To do
                    </span>
                  </h2>
                  <h2 className="text-xl text-amarelo font-bold sm:text-2xl">
                    {15}{" "}
                    <span className="text-xs text-roxo font-bold sm:text-[13px]">
                      In Progress
                    </span>
                  </h2>
                  <h2 className="text-xl text-verde font-bold sm:text-2xl">
                    {11}{" "}
                    <span className="text-xs text-roxo font-bold sm:text-[13px]">
                      Done
                    </span>
                  </h2>
                </div>

                <div className="bg-[#F6F6F6] pt-1 rounded-xl">
                  <h1 className="text-xs text-roxo font-bold text-center sm:text-[13px]">
                    Total estimated time
                  </h1>
                  <p className="text-roxo-claro text-[26px] font-bold text-center sm:text-4xl">
                    00:00
                  </p>
                </div>
              </div>

              <div className="bg-[#F6F6F6] min-w-[90px] w-[40%] row-span-2 p-1 pb-7 rounded-2xl">
                <h1 className="text-[10px] text-roxo font-bold sm:text-xs">
                  Most active
                </h1>
                <h2 className="text-[10px] text-roxo-claro font-bold mb-2 mt-[-6px] sm:text-xs">
                  last 30 days
                </h2>
                <div className="flex flex-col gap-1">
                  <InfoCard
                    jobPosition={"Job manager"}
                    profilePicUrl={"src/assets/profile-picture-1.jpg"}
                    size={"small"}
                    user={"John"}
                  />
                  <InfoCard
                    jobPosition={"Job manager"}
                    profilePicUrl={"src/assets/profile-picture-1.jpg"}
                    size={"small"}
                    user={"John"}
                  />
                  <InfoCard
                    jobPosition={"Job manager"}
                    profilePicUrl={"src/assets/profile-picture-1.jpg"}
                    size={"small"}
                    user={"John"}
                  />
                </div>
              </div>
            </div>
          </div>
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
      </div>
    </>
  );
}

interface InfoCardProps {
  user: string;
  profilePicUrl: string;
  jobPosition: string;
  size: "big" | "small";
}

const InfoCard = ({
  user,
  profilePicUrl,
  jobPosition,
  size,
}: InfoCardProps) => {
  if (size === "big") {
    return (
      <>
        <div className="w-full flex gap-2 items-center bg-white rounded-xl py-1 px-2 sm:gap-[10px] sm:py-[6px] sm:px-[9px]">
          <img
            className="max-w-9 sm:max-w-11 rounded-full"
            src={profilePicUrl}
            alt=""
          />
          <div className="flex flex-col">
            <h2 className="text-sm font-bold sm:text-base">{user}</h2>
            <h3 className="text-xs mt-[-5px] font-bold text-roxo sm:text-[13px]">
              {jobPosition}
            </h3>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="w-full flex gap-2 items-center bg-white rounded-xl py-[6px] px-[4px] ">
        <img
          className="w-6 h-6 rounded-2xl sm:w-8 sm:h-7"
          src={profilePicUrl}
          alt=""
        />
        <div className="flex flex-col">
          <h1 className="text-[10px] font-bold sm:text-xs">{user}</h1>
          <h2 className="text-[4px] font-bold text-roxo sm:text-[5px]">
            {jobPosition}
          </h2>
        </div>
      </div>
    </>
  );
};
