import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";

export default function Forbidden() {
  return (
    <><div className="w-full h-full min-h-screen flex flex-col justify-between">
         <Header/>
           <div  className="flex items-center justify-center">
             <div className="
               flex flex-col md:flex-row 
               items-center 
               justify-center 
               gap-4 md:gap-8
               w-[703px] h-[439px] pb-20 "
              >
               <div>
                   <img src="\src\assets\403.png" alt="Post-it" 
                   className="
                     w-[744pxpx] h-[189px] 
                     md:w-[334.59px] md:h-[439px] 
                      object-contain " 
                   />
               </div >
         
                 <div  className="text-center w-[387.41px] h-[72px] ">
                 <div>
                  <p className="text-center md:text-start text-7xl md:text-8xl font-normal ">403</p>
                  <p className="lg:text-start text-lg text-preto font-normal mb-2 ">
                    Nothing to see here... yet! To see <br /> this content, you need to {} 
                    <span className="block md:inline mt-2 md:mt-0">
                      <Link
                        to="/Login"
                        className="text-blue-700 underline font-bold md:text-end "
                      >
                        log in.
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
             </div>
           </div>
         <Footer/>
        </div>
       </>
  );
}
