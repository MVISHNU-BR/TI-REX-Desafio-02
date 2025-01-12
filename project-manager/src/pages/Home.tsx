import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import homeBanner from "../assets/homeBanner.jpg";
import person from "../assets/homePerson.png";
import Button from "../components/Button";
import FeaturedTools from "../components/FeaturedTools";
import TheManager from "../components/TheManager";
import LoginButton from "../components/LoginButton";
import FormField from "../components/FormField";
import checkIcon from "../assets/checkIcon.png";
function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="xl:absolute w-full">
        <Header>
          <div className="z-[3]">
            <LoginButton />
          </div>
        </Header>
      </div>
      <main className="h-screen">
        <section className="max-h-[700px] h-full  w-full flex flex-col items-center justify-center gap-5 relative overflow-hidden sm:gap-16 sm:max-h-[644px] px-5 xl:flex-row xl:gap-[344px] xl:min-h-[724px] xl:max-h-[724px] xl:items-start xl:pt-[169px]">
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
          <div className="flex flex-col relative gap-4 sm:flex-row sm:gap-8 md:gap-16 sm:px-5 xl:flex-col xl:gap-4">
            <div className="bg-black bg-opacity-70 w-44 h-20 rounded-2xl px-3 py-3 text-white font-medium text-base">
              <p>2000+</p>
              <span>Satisfied clients</span>
            </div>
            <div className="bg-black bg-opacity-70 w-44 h-20 rounded-2xl pl-3 pr-9 py-3 text-white font-medium text-base">
              <p>400+</p>
              <span className="text-nowrap">Managed projects</span>
            </div>
            <div className="bg-black bg-opacity-70 w-44 h-20 rounded-2xl px-3 py-3 text-white font-medium text-base">
              <p>500+</p>
              <span>Kanban boards</span>
            </div>
          </div>
          <div className="hidden xl:block absolute ml-[360px] mt-[-145px] z-2">
            <img
              src={person}
              className="h-[820px] w-[1140px] sticky object-cover"
              alt="Imagem de uma pessoa"
            />
          </div>
        </section>
        <TheManager />
        <FeaturedTools />
        <section className="container m-auto min-h-[510px] w-full flex flex-col items-center gap-16 bg-white py-12 xl:h-[549px] xl:flex-row xl:justify-center xl:gap-16">
          <div className="flex flex-col items-center justify-center h-[96px] px-5 gap-6 xl:w-[520px] xl:px-0 xl:items-start">
            <h3 className="text-azul-escuro text-[25px] sm:text-4xl font-bold">
              Subscribe to Updates
            </h3>
            <p className="text-azul-escuro text-sm sm:text-base font-normal">
              Stay informed with out latest updates
            </p>
          </div>
          <form
            onSubmit={handleSubscribe}
            className="w-full min-h-[256px] sm:w-[404px] px-5 flex flex-col gap-10 xl:px-0 xl:w-[520px]"
          >
            <div>
              <FormField
                htmlFor="email"
                inputType="email"
                labelText="Email"
                placeholder="Enter your email"
                className="mb-2"
              />
              <p className="text-slate-500">We promise not to spam</p>
            </div>
            <FormField
              htmlFor="Name"
              inputType="text"
              labelText="Name"
              placeholder="Enter your Name"
              className="mb-6"
            />
            <button className="bg-azul-escuro text-white py-2 px-9 sm:px-20 self-center rounded-lg hover:bg-azul-hover2 xl:self-start">
              Subscribe
            </button>
          </form>
        </section>
        {isModalOpen && (
          <div className="absolute bg-black bg-opacity-50">
            <div className="h-64 w-60 bg-white rounded-lg absolute flex flex-col items-center justify-center px-4 gap-4">
              <img src={checkIcon} alt="" width={45} height={45} />
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-red-500 font-bold text-xl self-end absolute top-1 right-4"
              >
                x
              </button>
              <h1>Success</h1>
              <p>check your email for more details!</p>
              <button
                className="bg-green-500 hover:bg-green-600 rounded-full px-12 py-1"
                onClick={() => setIsModalOpen(false)}
              >
                Ok
              </button>
            </div>
          </div>
        )}
        <Footer />
      </main>
    </>
  );
}

export default Home;
