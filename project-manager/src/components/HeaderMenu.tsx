import { useState } from "react";
import menuIcon from "../assets/menu.svg";
import searchIcon from "../assets/ic-search.svg";
import { useClerk } from "@clerk/clerk-react";
import { Link } from "react-router";

export default function HeaderMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { signOut } = useClerk();

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
      setIsSearchOpen(false);
    }
  };

  const searchOpen = () => {
    if (isSearchOpen) {
      setIsSearchOpen(false);
    } else {
      setIsSearchOpen(true);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="w-full h-20 px-5 flex justify-end items-center font-roboto text-lg">
      <div className="hidden lg:flex items-center gap-10">
        <button
          onClick={() => signOut()}
          className="text-white hover:underline hover:decoration-solid hover:decoration-branco hover:underline-offset-4 transition duration-300"
        >
          Home
        </button>
        <Link
          to="#about"
          className="text-white hover:underline hover:decoration-solid hover:decoration-branco hover:underline-offset-4 transition duration-300"
        >
          About
        </Link>
        <Link
          to="/settings"
          className="text-white hover:underline hover:decoration-solid hover:decoration-branco hover:underline-offset-4 transition duration-300"
        >
          Settings
        </Link>
        <Link
          to="/profile"
          className="text-white hover:underline hover:decoration-solid hover:decoration-branco hover:underline-offset-4 transition duration-300"
        >
          Profile
        </Link>
        <div className="border border-white border-opacity-10 rounded-[6px] w-[200px] h-[40px] flex items-center hover:border-azul-hover transition duration-300">
          <input
            type="text"
            placeholder="Search in site"
            className="outline-none text-white bg-transparent w-full h-full text-center hover:border-azul-hover transition duration-300"
          />
          <button className="p-1">
            <img
              src={searchIcon}
              alt="Search Icon"
              className="w-[35px] h-auto"
            />
          </button>
        </div>
      </div>

      <div className="flex lg:hidden items-center gap-4">
        <button onClick={toggleMenu}>
          <img src={menuIcon} alt="Menu Icon" className="w-6 h-6" />
        </button>

        <button
          onClick={searchOpen}
          className="w-[36px] h-[36px] p-[8px] rounded-[6px] border border-white"
        >
          <img src={searchIcon} alt="searchIcon" className="w-full h-full" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-20 right-0 w-full bg-azul-escuro p-5 flex flex-col gap-4  items-center justify-center lg:hidden transition-transform transform">
          <Link to="#home" className="text-white">
            Home
          </Link>
          <Link to="#about" className="text-white">
            About
          </Link>
          <Link to="#settings" className="text-white">
            Settings
          </Link>
          <Link to="#profile" className="text-white">
            Profile
          </Link>
        </div>
      )}

      {isSearchOpen && (
        <div className="absolute top-20 right-0 bg-azul-escuro p-5 border border-white border-opacity-10 rounded-[6px] w-full px-2 py-2 flex items-center lg:hidden transition-transform transform">
          <input
            type="text"
            placeholder="Search in site"
            className="outline-none text-white bg-transparent w-full h-full text-center "
          />
          <button className="p-1">
            <img src={searchIcon} alt="search-icon" />
          </button>
        </div>
      )}
    </nav>
  );
}
