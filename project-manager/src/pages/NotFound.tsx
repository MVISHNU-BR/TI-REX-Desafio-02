import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <>
      <Header/>
        <div  className="flex items-center justify-center">
          <div className="
            flex flex-col md:flex-row 
            items-center 
            justify-center 
            gap-4 md:gap-8
            w-[703px] h-[439px] "
            >
            <div>
                <img src="\src\assets\404.png" alt="Post-it" 
                className="
                  w-[202.91px] h-[189px] 
                  md:w-[334.59px] md:h-[439px] 
                  max-w-full max-h-full object-contain" 
                />
            </div >
      
              <div  className="text-center w-[230px] h-[196px]">
                <p className="text-center md:text-start text-7xl md:text-8xl font-normal">404</p>
                <p className="text-lg	text-preto mb-2">Oops! Nothing to see here, just a lost kanban task.</p>
                <div className="md:text-end ">
                  <Link to="/" className=" text-blue-700 underline font-bold md:text-end">
                  Go back to home 
                  </Link>
                </div>
              </div>
          </div>
        </div>
      <Footer/>
    </>
  );
}
