import { Link } from "react-router";
import logo from "../assets/logo.svg";
import Button from "./Button";
export default function Header() {
  return (
    <>
      <header className="bg-azul-escuro w-screen min-h-20 flex items-center justify-between gap-2 fixed top-0 left-0">
        <Link
          to="/"
          className="flex gap-5 items-center pl-5 
        "
        >
          <img src={logo} width={50} height={50} alt="logo project manager" />
          <h1 className="text-white text-lg sm:text-xl lg:text-[28px] text-nowrap">
            Project Manager
          </h1>
        </Link>
        <div className="flex items-center justify-center pr-5">
          <Button />
        </div>
      </header>
    </>
  );
}
