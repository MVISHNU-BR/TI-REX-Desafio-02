import { useRef, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import KanbanCard from "../components/Kanban/KanbanCard";
import KanbanColumn from "../components/Kanban/KanbanColumn";
import ResponsiveGrid from "../components/Kanban/ResponsiveGrid";

export default function Kanban() {
  const cards = [1, 2];
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

  return (
    <>
      <Header />
      <main
        ref={parentRef}
        className="relative bg-slate-100 max-w-none max-h-none flex flex-col items-center gap-[76px] px-5 pt-36 pb-7 overflow-auto touch-auto sm:px-9 sm:pt-64 sm:pb-16 sm:gap-16 md:py-9 md:justify-center"
      >
        <ResponsiveGrid parentRef={parentRef} />
        <div className="columns flex w-full justify-center gap-7">
          <KanbanColumn type="to-do">
            {cards.map((card, index) => (
              <KanbanCard
                priority="Mid"
                name="Task 3"
                users={users}
                progress={10}
                key={index}
              />
            ))}
            <KanbanCard
              priority="Low"
              name="Task 3"
              users={[
                {
                  name: "John",
                  profilePicUrl: "src/assets/profile-picture-1.jpg",
                },
                {
                  name: "John",
                  profilePicUrl: "src/assets/profile-picture-2.jpg",
                },
                {
                  name: "John",
                  profilePicUrl: "src/assets/profile-picture-2.jpg",
                },
                {
                  name: "John",
                  profilePicUrl: "src/assets/profile-picture-2.jpg",
                },
                {
                  name: "John",
                  profilePicUrl: "src/assets/profile-picture-2.jpg",
                },
                {
                  name: "John",
                  profilePicUrl: "src/assets/profile-picture-2.jpg",
                },
              ]}
              progress={10}
              img="src/assets/task-img-1.png"
            />
          </KanbanColumn>
          <KanbanColumn type="in-progress"></KanbanColumn>
          <KanbanColumn type="done"></KanbanColumn>
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

const InfoCard = ({ user, profilePicUrl, jobPosition, size }) => {
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
