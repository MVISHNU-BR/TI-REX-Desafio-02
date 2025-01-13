import Footer from "../components/Footer";
import Header from "../components/Header";
import KanbanColumn from "../components/KanbanColumn";

export default function Kanban() {
  return (
    <>
    <Header />
      <main className="bg-[url(src/assets/draggable-area.png)] bg-no-repeat bg-contain bg-center min-h-screen flex flex-col items-center gap-[76px] px-5 pt-36 pb-7">
        <div className="columns flex w-full justify-center gap-[6px]">
          <KanbanColumn type="to-do"/>
          <KanbanColumn type="in-progress"/>
          <KanbanColumn type="done"/>
        </div>
        <div id="flag" className="bg-preto-50 w-full px-[10px] pb-3 pt-[6px] rounded-2xl">
          <header className="rounded-2xl flex">
            <img src="src/assets/logo.svg" alt="Project manager logo" className="w-[22px] h-[22px] mr-2" />
            <h1 className="text-white font-bold text-base">Trabalhar no aplicativo</h1>
          </header>
          <p className="text-white font-normal text-[13px]">Adicione ideias, notas e faça um plano de organização de onde estiver.</p>
          <div className="flex justify-between mt-3">
            <button className="bg-white py-[5px] px-[18px] font-medium text-[13px] rounded-2xl">Agora não</button>
            <button className="bg-roxo-claro py-[5px] px-[18px] font-medium text-[13px] text-white rounded-2xl">Usar o aplicativo</button>
          </div>

        </div>
      </main>
    <Footer />
    </>
  )
}