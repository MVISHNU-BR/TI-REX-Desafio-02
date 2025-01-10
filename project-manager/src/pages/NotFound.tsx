import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";


export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center">
            <div className="w-[956px] h-[439px] flex items-center justify-center overflow-hidden">
                <div className="flex items-center gap-8 w-full h-full">
                    <img 
                        src="src/assets/404.png" 
                        alt="Post-it" 
                        className="w-[227px] h-[220px] md:w-[455px] md:h-[439px] max-w-full max-h-full object-contain"
                    />
                    <div className="w-full h-full flex flex-col justify-center">
                        <h1 className="font-roboto mb-4" style={{ fontSize: "88px" }}>
                        <h1 className="font-roboto mb-4" style={{fontSize: "88px"}}>
                            404
                        </h1>
                        <p className="text-lg text-black-500 mb-4 word-break" style={{ fontSize: "24px" }}>
                        <p className="text-lg text-black-500 mb-4" style={{fontSize: "24px"}}>
                            Oops! Nothing to see here, just a lost kanban task.
                        </p>
                        <Link to="/" className="text-blue-500 text-right hover:underline font-semibold">
                            Go back to home 
                        </Link>
                        <div className="w-full text-right">
                          <Link to="/" className="text-blue-500 underline font-semibold">
                          Go back to home 
                          </Link>
                        </div>
                    </div>
                </div>
            </div>
    </main>

      <Footer />
    </div>
  );
}

