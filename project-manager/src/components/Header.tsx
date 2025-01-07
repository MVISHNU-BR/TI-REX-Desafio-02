import { Link } from "react-router";
import logo from "../assets/logo.svg";

interface HeaderProps {
  children?: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <>
      <header className="bg-azul-escuro w-full min-h-20 h-full flex items-center justify-between gap-2">
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
        <div className="flex items-center justify-center pr-5">{children}</div>
      </header>
    </>
  );
}
