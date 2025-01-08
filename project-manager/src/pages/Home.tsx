import Header from "../components/Header";
import homeBanner from "../assets/homeBanner.jpg";
import person from "../assets/homePerson.png";
import Button from "../components/Button";
import FeaturedTools from "../components/FeaturedTools";
import TheManager from "../components/TheManager";
function Home() {
  return (
    <>
      <div className="xl:absolute xl:z-10 w-full">
        <Header />
      </div>
      <main className="h-screen">
        <section className="min-h-[700px] h-full z-80 w-full flex flex-col items-center justify-center gap-5 relative overflow-hidden sm:gap-16 sm:min-h-[644px] px-5 xl:flex-row xl:gap-[344px] xl:max-h-[724px]  xl:items-start xl:pt-[169px]">
          <img
            src={homeBanner}
            className="opacity-95 w-screen h-full object-cover absolute top-0 xl:top-12 left-0 -z-50"
            alt="banner de fundo seção welcome"
          />
          <div className="bg-black  bg-opacity-55 rounded-[30px] max-h-[285px]  h-full max-w-[353px] w-full flex flex-col items-center gap-4 py-7 px-5 sm:max-w-[656px] sm:max-h-[258px] md:items-start sm:px-[68px]">
            <h2 className="text-2xl font-bold text-white text-nowrap sm:text-[40px]">
              Welcome to{" "}
              <span className="text-azul-claro">Project Manager</span>
            </h2>
            <p className="text-white text-sm leading-6 text-center max-w-[236px] sm:max-w-[520px] sm:text-base sm:text-left">
              Get your projects and ideas in order, all in one place! Sign up
              now and discover a smarter way to manage your work with efficiency
              and teamwork
            </p>
            <Button></Button>
          </div>
          <div className="flex flex-col relative -z-40 gap-4 sm:flex-row sm:gap-8 md:gap-16 sm:px-5 xl:flex-col xl:gap-4">
            <div className="bg-black bg-opacity-70 w-44 h-20 rounded-2xl px-3 py-3 text-white font-medium text-base">
              <p>2000+</p>
              <span>Satisfied clients</span>
            </div>
            <div className="bg-black bg-opacity-70 w-44 h-20 rounded-2xl pl-3 pr-9 py-3 text-white font-medium text-base">
              <p>400+</p>
              <span>Managed projects</span>
            </div>
            <div className="bg-black bg-opacity-70 w-44 h-20 rounded-2xl px-3 py-3 text-white font-medium text-base">
              <p>500+</p>
              <span>Kanban boards</span>
            </div>
          </div>
          <div className="hidden xl:block absolute ml-[360px] mt-[-145px] z-50">
            <img
              src={person}
              className="h-[820px] w-[1140px] sticky object-cover"
              alt="Imagem de uma pessoa"
            />
          </div>
        </section>
        <TheManager />
        <FeaturedTools />
        {/* <section className="relative z-50"></section> renan coloca o seu codigo dentro desta */}
      </main>
    </>
  );
}

export default Home;
