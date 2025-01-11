import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";

export default function Forbidden() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="w-[845px] h-[367px] flex items-center justify-center overflow-hidden">
          <div className="flex items-center gap-6 w-full h-full">
            <img
              src="src/assets/403.png"
              alt="Padlock"
              className="w-[227px] h-[220px] md:w-[367px] md:h-[367px] max-w-full max-h-full object-contain"
            />
            <div className="w-full h-full flex flex-col justify-center">
              <h1 className="font-roboto text-[96px] mb-2" >
                403
              </h1>
              <p className="font-roboto text-[24px] text-black font-normal mb-2">
                Nothing to see here... yet! To see this content, you need to {" "}
                <Link to="/Login" className="text-blue-700 font-medium underline">
                  log in.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
