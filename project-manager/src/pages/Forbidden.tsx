import { useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Forbidden() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/Login"); 
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="w-[845px] h-[367px] flex items-center justify-center overflow-hidden">
          <div className="flex items-center gap-6 w-full h-full">
            <img
              src="src/assets/403.png"
              alt="Padlock"
              className="w-[227px] h-[220px] md:w-[367px] md:h-[367px] max-w-full max-h-full object-contain"/>
            <div className="w-full h-full flex flex-col justify-center">
              <h1 className="font-roboto mb-2 " style={{ fontSize: "96px" }}>
                403
              </h1>
              <p className="font-roboto text-lg text-black-500 font-normal mb-2" style={{ fontSize: "24px" }}>
                Nothing to see here... yet! To see this content, you need to {" "}
                <a href="#" onClick={handleLoginClick} className="text-blue-700 font-medium underline">
                  log in.
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
